import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, injectIntl } from 'react-intl';
import injectWbResizeEvent from '/imports/ui/components/presentation/resize-wrapper/component';
import Button from '/imports/ui/components/button/component';
import NoteService from '/imports/ui/components/note/service';
import { styles } from './styles';
import { PANELS, ACTIONS } from '../layout/enums';

const intlMessages = defineMessages({
  hideNoteLabel: {
    id: 'app.note.hideNoteLabel',
    description: 'Label for hiding note button',
  },
  title: {
    id: 'app.note.title',
    description: 'Title for the shared notes',
  },
  tipLabel: {
    id: 'app.note.tipLabel',
    description: 'Label for tip on how to escape iframe',
  },
});

const propTypes = {
  isLocked: PropTypes.bool.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
  isRTL: PropTypes.bool.isRequired,
};

const Note = ({
  isLocked,
  intl,
  isRTL,
  layoutContextDispatch,
  isResizing,
}) => {
  const [noteURL, setNoteURL] = useState();

  useEffect(() => {
    NoteService.getNoteId().then((response) => {
      setNoteURL(NoteService.buildNoteURL(response));
    });
  }, [isLocked, isRTL]);

  useEffect(() => () => NoteService.setLastRevs(), []);

  export const appendToSharedNotes = (textToAppend) => {

    let myFrame = document.getElementById('ace_container_frame');

    if (myFrame) {
      let myIDoc = myFrame.contentDocument;
      if(myIDoc) {
        const t = myIDoc.createTextNode(textToAppend);
        const p = myIDoc.createElement('p');
        p.appendChild(t);
        let nodeList = myIDoc.getElementsByName('ace_outer');
        if(nodeList){
          for(frame of nodeList){
            let anotherDoc = frame.contentDocument;
            let oneMoreFrame = anotherDoc.getElementsByName('ace_inner');
            if(oneMoreFrame){
              for(frame of oneMoreFrame){
                let finalDoc = frame.contentDocument;
                let textDiv = finalDoc.getElementById('innerdocbody');
                textDiv.appendChild(p);
              }
            }
          }
        }
      }
    } else console.log("F");

  }

  return (
    <div
      data-test="note"
      className={styles.note}
    >
      <header className={styles.header}>
        <div
          data-test="noteTitle"
          className={styles.title}
        >
          <Button
            onClick={() => {
              layoutContextDispatch({
                type: ACTIONS.SET_SIDEBAR_CONTENT_IS_OPEN,
                value: false,
              });
              layoutContextDispatch({
                type: ACTIONS.SET_SIDEBAR_CONTENT_PANEL,
                value: PANELS.NONE,
              });
            }}
            data-test="hideNoteLabel"
            aria-label={intl.formatMessage(intlMessages.hideNoteLabel)}
            label={intl.formatMessage(intlMessages.title)}
            icon={isRTL ? 'right_arrow' : 'left_arrow'}
            className={styles.hideBtn}
          />
        </div>
      </header>
      <iframe
        title="etherpad"
        id="ace_container_frame"
        src={noteURL}
        aria-describedby="sharedNotesEscapeHint"
        style={{
          pointerEvents: isResizing ? 'none' : 'inherit',
        }}
      />
      <span id="sharedNotesEscapeHint" className={styles.hint} aria-hidden>
        {intl.formatMessage(intlMessages.tipLabel)}
      </span>
    </div>
  );
};

Note.propTypes = propTypes;

export default injectWbResizeEvent(injectIntl(Note));
