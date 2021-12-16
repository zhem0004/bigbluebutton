import React, { useContext } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Meetings from '/imports/api/meetings';
import Users from '/imports/api/users';
import Auth from '/imports/ui/services/auth';
import { withModalMounter } from '/imports/ui/components/modal/service';
import { makeCall } from '/imports/ui/services/api';
import RandomUserSelect from './component';
import { UsersContext } from '/imports/ui/components/components-data/users-context/context';
import { ACTIONS, PANELS } from '/imports/ui/components/layout/enums';
import LayoutContext from '/imports/ui/components/layout/context';
import NoteService from '/imports/ui/components/note/service';

const SELECT_RANDOM_USER_ENABLED = Meteor.settings.public.selectRandomUser.enabled;

const RandomUserSelectContainer = (props) => {
  const usingUsersContext = useContext(UsersContext);
  const { users } = usingUsersContext;
  const { randomlySelectedUser } = props;

  let mappedRandomlySelectedUsers = [];

  let counter = 0;

  const layoutContext = useContext(LayoutContext);

  if (randomlySelectedUser) {
    mappedRandomlySelectedUsers = randomlySelectedUser.map((ui) => {
      const selectedUser = users[Auth.meetingID][ui];
      counter++;
      return {
        key: counter -1,
        checked: false,
        userId: selectedUser.userId,
        avatar: selectedUser.avatar,
        color: selectedUser.color,
        name: selectedUser.name,
      };
    });
  }

  const openNotes = () => {
    const { layoutContextDispatch } = layoutContext;
    NoteService.toggleNotePanel('chat', layoutContextDispatch);
  }

  const currentUser = { userId: Auth.userID, presenter: users[Auth.meetingID][Auth.userID].presenter };
  return <RandomUserSelect {...props} 
  mappedRandomlySelectedUsers={mappedRandomlySelectedUsers} 
  currentUser={currentUser} 
  openNotes={openNotes}
  />;
};
export default withModalMounter(withTracker(({ mountModal }) => {
  const viewerPool = Users.find({
    meetingId: Auth.meetingID,
    presenter: { $ne: true },
    role: { $eq: 'VIEWER' },
  }, {
    fields: {
      userId: 1,
    },
  }).fetch();

  const meeting = Meetings.findOne({ meetingId: Auth.meetingID }, {
    fields: {
      randomlySelectedUser: 1,
    },
  });

  const randomUserReq = () => {
    makeCall('setRandomUser');
  };

  const clearRandomlySelectedUser = () => (SELECT_RANDOM_USER_ENABLED ? makeCall('clearRandomlySelectedUser') : null);

  const changeIdentifier = Math.random();

  return ({
    closeModal: () => mountModal(null),
    numAvailableViewers: viewerPool.length,
    changeIdentifier,
    randomUserReq,
    clearRandomlySelectedUser,
    randomlySelectedUser: meeting.randomlySelectedUser,
  });
})(RandomUserSelectContainer));
