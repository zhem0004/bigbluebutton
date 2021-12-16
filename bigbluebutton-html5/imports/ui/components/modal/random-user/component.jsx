import React, { Component } from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import Modal from '/imports/ui/components/modal/simple/component';
import Button from '/imports/ui/components/button/component';
import AudioService from '/imports/ui/components/audio/service';
import { styles } from './styles';
import { forEach, indexOf, map } from 'lodash';
import NoteService from '/imports/ui/components/note/service';
import { appendToSharedNotes } from '/imports/ui/components/note/component.jsx';

const SELECT_RANDOM_USER_COUNTDOWN = Meteor.settings.public.selectRandomUser.countdown;

// TODOs
// 1) Make mergeble
// 2) Implement Avatar & Toggle components

const messages = defineMessages({
  noViewers: {
    id: 'app.modal.randomUser.noViewers.description',
    description: 'Label displayed when no viewers are avaiable',
  },
  selected: {
    id: 'app.modal.randomUser.selected.description',
    description: 'Label shown to the selected user',
  },
  randUserTitle: {
    id: 'app.modal.randomUser.title',
    description: 'Modal title label',
  },
  whollbeSelected: {
    id: 'app.modal.randomUser.who',
    description: 'Label shown during the selection',
  },
  onlyOneViewerTobeSelected: {
    id: 'app.modal.randomUser.alone',
    description: 'Label shown when only one viewer to be selected',
  },
  reselect: {
    id: 'app.modal.randomUser.reselect.label',
    description: 'select new random user button label',
  },
  ariaModalTitle: {
    id: 'app.modal.randomUser.ariaLabel.title',
    description: 'modal title displayed to screen reader',
  },
});

const propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
  mountModal: PropTypes.func.isRequired,
  numAvailableViewers: PropTypes.number.isRequired,
  randomUserReq: PropTypes.func.isRequired,
};

class RandomUserSelect extends Component {
  constructor(props) {
    super(props);

    if (props.currentUser.presenter) {
      props.randomUserReq();
    }

    this.state = {
      count: 0,
      exclude: true,
      alphabetic: false,
      currentUserList: props.mappedRandomlySelectedUsers,
      changeIdentifier: 0,
      checkedList: [],
    };
    this.play = this.play.bind(this);
  }


  play() {
    AudioService.playAlertSound(`${Meteor.settings.public.app.cdn
      + Meteor.settings.public.app.basename
      + Meteor.settings.public.app.instanceId}`
      + '/resources/sounds/Poll.mp3');
  }

  filterUsers() {
    let workCopyOfUsers = this.props.mappedRandomlySelectedUsers.slice();
    if(this.state.exclude){
      for(let key of this.state.checkedList){
        workCopyOfUsers = workCopyOfUsers.filter(ui => {
          console.log(`U[${ui.key}] != K[${key}]= ${(ui.key != key)}`);
          return (ui.key != key);
        });
      }
    } else {
      workCopyOfUsers = workCopyOfUsers.filter(ui => {
        let boolSum = false;
        for(let key of this.state.checkedList){
          boolSum = boolSum || (ui.key == key);
        }
        return boolSum;
      });
    }
    workCopyOfUsers.map(ui => {
      return {
        key: ui.key,
        checked: false,
        userId: ui.userId,
        avatar: ui.avatar,
        color: ui.color,
        name: ui.name,
      };
    });
    this.setState({currentUserList: workCopyOfUsers, checkedList: []})
  }

  reselect() {
    this.props.randomUserReq();
    let workCopyOfUsers = this.props.mappedRandomlySelectedUsers.slice();
    workCopyOfUsers.map(ui => {
      return {
        key: ui.key,
        checked: false,
        userId: ui.userId,
        avatar: ui.avatar,
        color: ui.color,
        name: ui.name,
      };
    });
    this.setState({currentUserList: workCopyOfUsers, checkedList: []});
  }

  componentDidMount(){
    this.setState({checkedList: []});
  }

  componentDidUpdate(){
    if(this.props.changeIdentifier != this.state.changeIdentifier){
      this.setState({currentUserList: this.props.mappedRandomlySelectedUsers, changeIdentifier: this.props.changeIdentifier});
    }
  }

  render() {

    const {
          intl,
          mountModal,
          numAvailableViewers,
          changeIdentifier,
          openNotes,
          currentUser,
          clearRandomlySelectedUser,
          mappedRandomlySelectedUsers,
        } = this.props;

    const sendToSharedNotes = () => {

      openNotes();

      setTimeout(() => {
        let counter = 0;
        appendToSharedNotes("");
        this.state.currentUserList.map(ui => {
          counter++;
          appendToSharedNotes(`${counter}) ${ui.name}`);
        });

        //Add two lines at the bottom
        //In case it is the end of page
        appendToSharedNotes("");
        appendToSharedNotes("");
      }, 1000);
    }

    function compare( a, b ) {
      if ( a.name < b.name ){
        return -1;
      }
      if ( a.name > b.name ){
        return 1;
      }
      return 0;
    }

    const checkMarkUser = (key) => {
      let i = indexOf(this.state.checkedList, key);
      const newList = this.state.checkedList.slice();
      if(i > -1 ){
        newList.splice(i, 1);
      } else {
        newList.push(key);
      }
      this.setState({checkedList: newList});
    }

    let alphabetizedUserList = this.state.currentUserList.slice();

    alphabetizedUserList.sort(compare);

    let counter = 0;

    let counterForAlphabetic = 0;

    let randomizedUsersElement = (
        <div className={styles.gridContainer}>
          { this.state.currentUserList.map(ui => {
            counter++;
            return <h3 className={styles.solid} key={ui.key} >
                <span className={styles.userListNum} >{counter + ") "}</span>
                <span className={styles.modalAvatar} style={{ backgroundColor: `${ui.color}` }}>
                  {ui.name.slice(0, 2)}
                </span>
                <span className={styles.userName} >{ui.name + "  "}</span>
                <label>
                  <input 
                    type="checkbox"
                    checked={indexOf(this.state.checkedList, ui.key) > -1}
                    onChange={() => checkMarkUser(ui.key)}
                  />
                </label>
              </h3>
          })}
        </div>
    );

    let alphabeticUsersElement = (
        <div className={styles.gridContainer}>
          { alphabetizedUserList.map(ui => {
            counterForAlphabetic++;
            return <h3 className={styles.solid} key={ui.key} >
                <span className={styles.userListNum} >{counterForAlphabetic + ") "}</span>
                <span className={styles.modalAvatar} style={{ backgroundColor: `${ui.color}` }}>
                  {ui.name.slice(0, 2)}
                </span>
                <span className={styles.userName} >{ui.name + "  "}</span>
                <label>
                <input 
                    type="checkbox"
                    checked={indexOf(this.state.checkedList, ui.key) > -1}
                    onChange={() => checkMarkUser(ui.key)}
                  />
                </label>
              </h3>
          })}
        </div>
    );

    let modalElement;

    if(currentUser.presenter){
      modalElement =(
        <Modal
      title="Randomized List"  
      hideBorder
        onRequestClose={() => {
          if (currentUser.presenter) clearRandomlySelectedUser();
          mountModal(null);
        }}
        >
        <div className={styles.modalToolbar}>
        <Button
              label={"RESET"}
              color="primary"
              size="md"
              onClick={() => this.reselect()}
            />
        <Button
              label={"Filter"}
              color="primary"
              size="md"
              onClick={() => this.filterUsers()}
            />
          <span className={styles.checkBoxContainer}>
            <label className={styles.check}>
              <input type="checkbox" onChange={() => this.setState({ exclude: !this.state.exclude })}/>
              <span className={styles.toggler}/>
            </label>
            &nbsp;
            { (this.state.exclude) ? "Exclude" : " Keep"}
          </span>
          <span className={styles.checkBoxContainer}>
            <label className={styles.check}>
              <input type="checkbox" onChange={() => this.setState({ alphabetic: !this.state.alphabetic })}/>
              <span className={styles.toggler}/>
            </label>
            &nbsp;
            { (this.state.alphabetic) ? "Alphabetic  " : "Random order  "}
          </span>
        <Button
              label={"Append to Shared Notes"}
              color="primary"
              size="md"
              onClick={() => sendToSharedNotes()}
            />
        </div>
        {(this.state.alphabetic) 
          ? alphabeticUsersElement
          : randomizedUsersElement
        }
        </Modal>
      );
    } else modalElement = null;

    return (modalElement);
  }
}

RandomUserSelect.propTypes = propTypes;
export default injectIntl(RandomUserSelect);
