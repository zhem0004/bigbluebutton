import React from 'react';
import PropTypes from 'prop-types';
import Settings from '/imports/ui/services/settings';
import Styled from './styles';
import browserInfo from '/imports/utils/browserInfo';

const propTypes = {
  children: PropTypes.node.isRequired,
  moderator: PropTypes.bool.isRequired,
  presenter: PropTypes.bool,
  talking: PropTypes.bool,
  muted: PropTypes.bool,
  listenOnly: PropTypes.bool,
  voice: PropTypes.bool,
  noVoice: PropTypes.bool,
  color: PropTypes.string,
  emoji: PropTypes.bool,
  avatar: PropTypes.string,
};

const defaultProps = {
  presenter: false,
  talking: false,
  muted: false,
  listenOnly: false,
  voice: false,
  noVoice: false,
  color: '#000',
  emoji: false,
  avatar: '',
};

const { animations } = Settings.application;
const { isChrome, isFirefox, isEdge } = browserInfo;

const UserAvatar = ({
  children,
  moderator,
  presenter,
  talking,
  muted,
  listenOnly,
  color,
  voice,
  emoji,
  avatar,
  noVoice,
  whiteboardAccess,
}) => (
  <Styled.Avatar
    aria-hidden="true"
    data-test={moderator ? 'moderatorAvatar' : 'viewerAvatar'}
    moderator={moderator}
    presenter={presenter}
    whiteboardAccess={whiteboardAccess && !presenter}
    muted={muted}
    listenOnly={listenOnly}
    voice={voice}
    noVoice={noVoice && !listenOnly}
    isChrome={isChrome}
    isFirefox={isFirefox}
    isEdge={isEdge}
    style={{
      backgroundColor: color,
      color, // We need the same color on both for the border
    }}
  >

    <Styled.Talking talking={talking && !muted && avatar.length === 0} animations={animations} />

    {avatar.length !== 0 && !emoji
      ? (
        <Styled.Image>
          <Styled.Img
            moderator={moderator}
            src={avatar}
          />
        </Styled.Image>
      ) : (
        <Styled.Content>
          {children}
        </Styled.Content>
      )}
  </Styled.Avatar>
);

UserAvatar.propTypes = propTypes;
UserAvatar.defaultProps = defaultProps;

export default UserAvatar;
