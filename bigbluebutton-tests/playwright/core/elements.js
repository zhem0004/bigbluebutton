// Common
exports.actions = 'button[data-test="actionsButton"]';
exports.actionsItem = 'div[id="actions-dropdown-menu"] ul li';
exports.pollMenuButton = 'div[data-test="pollMenuButton"]';
exports.optionsButton = 'button[data-test="optionsButton"]';
exports.settings = 'li[data-test="settings"]';
exports.modalConfirmButton = 'button[data-test="modalConfirmButton"]';
exports.screenshareConnecting = 'div[data-test="screenshareConnecting"]';
exports.screenShareVideo = 'video[id="screenshareVideo"]';
exports.modalDismissButton = 'button[data-test="modalDismissButton"]';
exports.closeModal = 'button[data-test="closeModal"]';
exports.isSharingScreen = 'div[data-test="isSharingScreen"]';
exports.pdfFileName = '100PagesFile.pdf';
exports.raiseHandBtn = 'button[data-test="raiseHandLabel"]';
exports.lowerHandBtn = 'button[data-test="lowerHandLabel"]';
exports.meetingEndedModal = 'div[data-test="meetingEndedModal"]';
exports.logout = 'li[data-test="logout"]';
exports.rating = 'div[data-test="rating"]';
exports.errorScreenMessage = 'h1[data-test="errorScreenMessage"]';
exports.errorMessageLabel = 'span[id="error-message"]';
// Accesskey
exports.chatButtonKey = 'div[accesskey="P"]';
exports.userListButton = 'button[accesskey="U"]';

// Audio
exports.joinAudio = 'button[data-test="joinAudio"]';
exports.audioModal = 'div[data-test="audioModal"]';
exports.audioSettingsModal = 'div[data-test="audioSettingsModal"]';
exports.listenOnlyButton = 'button[data-test="listenOnlyBtn"]';
exports.testSpeakerButton = 'button[data-test="testSpeakerButton"]';
exports.stopHearingButton = 'button[data-test="stopHearingButton"]';
exports.joinEchoTestButton = 'button[data-test="joinEchoTestButton"]';
exports.establishingAudioLabel = 'span[data-test="establishingAudioLabel"]';
exports.leaveListenOnly = 'button[data-test="leaveListenOnly"]';
exports.leaveAudio = 'li[data-test="leaveAudio"]';
exports.audioDropdownMenu = 'button[data-test="audioDropdownMenu"]';
exports.defaultInputAudioDevice = 'li[data-test="audioinput-1"]';
exports.secondInputAudioDevice = 'li[data-test="audioinput-2"]';
exports.microphoneButton = 'button[data-test="microphoneBtn"]';
exports.echoYesButton = 'button[data-test="echoYesBtn"]';
exports.connectingToEchoTest = 'span[data-test="connectingToEchoTest"]';
exports.hasVolumeEchoTest = 'span[data-test="hasVolume"]';
exports.hasNoVolumeEchoTest = 'span[data-test="hasNoVolume"]';
exports.isTalking = 'button[data-test="isTalking"]';
exports.wasTalking = 'button[data-test="wasTalking"]';
exports.talkingIndicator = 'div[data-test="talkingIndicator"]';
exports.unmuteMicButton = 'button[data-test="unmuteMicButton"]';
exports.muteMicButton = 'button[data-test="muteMicButton"]';

// Breakout
exports.createBreakoutRooms = 'li[data-test="createBreakoutRooms"]';
exports.randomlyAssign = 'button[data-test="randomlyAssign"]';
exports.resetAssignments = 'button[data-test="resetAssignments"]'
exports.breakoutRoomsItem = 'div[data-test="breakoutRoomsItem"]';
exports.alreadyConnected = 'span[data-test="alreadyConnected"]';
exports.askJoinRoom1 = 'button[data-test="askToJoinRoom1"]';
exports.joinRoom1 = 'button[data-test="joinRoom1"]';
exports.allowChoiceRoom = 'input[id="freeJoinCheckbox"]';
exports.labelGeneratingURL = 'span[data-test="labelGeneratingURL"]';
exports.endBreakoutRoomsButton = 'button[data-test="endBreakoutRoomsButton"]';
exports.durationTime = 'input[data-test="durationTime"]';
exports.decreaseBreakoutTime = 'button[data-test="decreaseBreakoutTime"]';
exports.increaseBreakoutTime = 'button[data-test="increaseBreakoutTime"]';
exports.selectNumberOfRooms = 'select[id="numberOfRooms"]';
exports.roomGrid = 'div[data-test="roomGrid"] >> input';
exports.breakoutBox0 = 'div[id="breakoutBox-0"]';
exports.breakoutBox1 = 'div[id="breakoutBox-1"]';
exports.breakoutBox2 = 'div[id="breakoutBox-2"]';
exports.breakoutOptionsMenu = 'button[data-test="breakoutOptionsMenu"]';
exports.openUpdateBreakoutUsersModal = 'li[data-test="openUpdateBreakoutUsersModal"]';
exports.userTest = 'div[id="breakoutBox-0"] >> p:nth-child(2)';
exports.moveUser = 'div[id="breakoutBox-1"] >> p:nth-child(1)';
exports.openBreakoutTimeManager = 'li[data-test="openBreakoutTimeManager"]';
exports.inputSetTimeSelector = 'input[id="inputSetTimeSelector"]';
exports.sendButtonDurationTime = 'button[data-test="sendButtonDurationTime"]';
exports.breakoutRemainingTime = 'span[data-test="breakoutRemainingTime"]';
exports.roomNameInput = 'input[data-test="roomName-1"]';
exports.roomName1Test = 'span[data-test="Room 1Test"]';
exports.userNameBreakoutRoom = 'div[data-test="userNameBreakoutRoom-Room 1"]';
exports.userNameBreakoutRoom2 = 'div[data-test="userNameBreakoutRoom-Room 2"]';
exports.userNameBreakoutRoom7 = 'div[data-test="userNameBreakoutRoom-Room 7"]';
exports.endAllBreakouts = 'li[data-test="endAllBreakouts"]';
exports.breakoutRoomList = 'div[data-test="breakoutRoomList"]';
exports.warningNoUserAssigned = 'span[data-test="warningNoUserAssigned"]';
exports.timeRemaining = 'span[data-test="timeRemaining"]';
exports.captureBreakoutSharedNotes = 'input[id="captureNotesBreakoutCheckbox"]';
exports.captureBreakoutWhiteboard = 'input[id="captureSlidesBreakoutCheckbox"]';

// Chat
exports.chatBox = 'textarea[id="message-input"]';
exports.chatButton = 'div[data-test="chatButton"]';
exports.sendButton = 'button[data-test="sendMessageButton"]';
exports.chatPollMessageText = 'p[data-test="chatPollMessageText"]';
exports.chatMessages = 'div[data-test="chatMessages"]';
exports.chatOptions = 'button[data-test="chatOptionsMenu"]';
exports.chatClear = 'li[data-test="chatClear"]';
exports.chatSave = 'li[data-test="chatSave"]';
exports.chatCopy = 'li[data-test="chatCopy"]';
exports.chatTitle = 'header[data-test="chatTitle"]';
exports.startPrivateChat = 'li[data-test="startPrivateChat"]';
exports.publicChat = 'div[data-test="publicChat"]';
exports.privateChat = 'div[data-test="privateChat"]';
exports.hidePublicChat = 'button[data-test="hidePublicChat"]';
exports.hidePrivateChat = 'button[data-test="hidePrivateChat"]';
exports.closePrivateChat = 'button[data-test="closePrivateChat"]';
exports.typingIndicator = 'span[data-test="typingIndicator"]';
exports.chatUserMessageText = 'p[data-test="chatUserMessageText"]';
exports.secondChatUserMessageText = 'p[data-test="chatUserMessageText"]>>nth=1';
exports.chatClearMessageText = 'p[data-test="chatClearMessageText"]';
exports.chatWelcomeMessageText = 'p[data-test="chatWelcomeMessageText"]';
exports.waitingUsersLobbyMessage = 'div[data-test="lobbyMessage"] >> textarea';
exports.sendLobbyMessage = 'div[data-test="lobbyMessage"] >> button';
exports.lobbyMessage = 'div[data-test="lobbyMessage"] >> p';
exports.positionInWaitingQueue = 'div[id="positionInWaitingQueue"]';
exports.allowEveryone = 'button[data-test="allowEveryone"]';
exports.denyEveryone = 'button[data-test="denyEveryone"]';
exports.guestMessage = 'p[data-test="guestMessage"]';
exports.privateMessageGuest = 'button[data-test="privateMessageGuest"]';
exports.acceptGuest = 'button[data-test="acceptGuest"]';
exports.denyGuest = 'button[data-test="denyGuest"]';
exports.inputPrivateLobbyMesssage = 'div[data-test="privateLobbyMessage"] >> textarea';
exports.sendPrivateLobbyMessage = 'div[data-test="privateLobbyMessage"] >> button';
exports.rememberCheckboxId = 'input[id="rememberCheckboxId"]';
exports.welcomeMessage = 'h1[id="welcome-message"]';
// Emoji picker
exports.emojiPickerButton = 'button[data-test="emojiPickerButton"]';
exports.frequentlyUsedEmoji = '👍';
exports.emojiSent = 'section[aria-label="Frequently Used"] button[title="+1"] span';
// Auto Convert Emoji
exports.autoConvertEmojiMessage = ':)';
exports.convertedEmojiMessage = '😊';
// Messages
exports.message = 'Hello World!';
exports.testMessage = 'Just a test';
exports.message1 = 'Hello User2';
exports.message2 = 'Hello User1';
exports.publicMessage1 = 'This is a Public Message from User1';
exports.publicMessage2 = 'This is a Public Message from User2';
exports.uniqueCharacterMessage = 'A';

// CustomParameters
exports.audioOptionsButtons = 'span[data-test="audioModalOptions"] > button';
exports.userListContent = 'div[data-test="userListContent"]';
exports.brandingAreaLogo = 'div[data-test="brandingArea"]';
exports.toolbarToolsList = 'div[data-test="toolbarToolsList"]';
exports.notificationBannerBar = 'div[data-test="notificationBannerBar"]';
exports.zoomInBtn = 'button[data-test="zoomInBtn"]';
exports.recordingIndicator = 'div[data-test="recordingIndicator"]';
exports.webcamMirroredVideoContainer = 'video[data-test="mirroredVideoContainer"]';
exports.userslist = 'div[data-test="userList"]';

// Notes
exports.sharedNotes = 'div[data-test="sharedNotes"]';
exports.hideNotesLabel = 'button[data-test="hideNotesLabel"]';
exports.etherpadFrame = 'iframe[title="pad"]';
exports.etherpadOuter = 'iframe[title="Ether"]';
exports.etherpadInner = 'iframe[title="pad"]';
exports.etherpadEditable = 'body[id="innerdocbody"]';
exports.sendNotesToWhiteboard = 'li[data-test="moveNotesToWhiteboard"]';
exports.presentationUploadProgressToast = 'div[data-test="presentationUploadProgressToast"]';
exports.sharedNotesViewingMode = 'iframe[title="shared notes viewing mode"]';
exports.currentSlideText = 'span[id="currentSlideText"]';
exports.notesOptions = 'button[data-test="notesOptionsMenu"]';

// Notifications
exports.smallToastMsg = 'div[data-test="toastSmallMsg"]';
exports.currentPresentationToast = 'div[data-test="toastSmallMsg"] > div';
exports.notificationsTab = 'span[id="notificationTab"]';
exports.chatPopupAlertsBtn = 'input[data-test="chatPopupAlertsBtn"]';
exports.hasUnreadMessages = 'button[data-test="hasUnreadMessages"]';
exports.userJoinPushAlerts = 'input[data-test="userJoinPopupAlerts"]';
exports.toastContainer = 'div[data-test="toastContainer"]';
exports.presentationStatusInfo = 'span[data-test="presentationStatusInfo"]';
exports.noButton = 'button[aria-label="No"]';
exports.yesButton = 'button[aria-label="Yes"]';
// Toasts
exports.savedSettingsToast = 'Settings have been saved';
exports.publicChatToast = 'New Public Chat message';
exports.privateChatToast = 'New Private Chat message';
exports.joinAudioToast = 'You have joined the audio conference';
exports.pollPublishedToast = 'Poll results were published';
exports.startScreenshareToast = 'Screenshare has started';
exports.endScreenshareToast = 'Screenshare has ended';
exports.joiningMessageToast = 'You have joined the audio conference';
exports.attendeeJoinedToast = 'Attendee joined the session';
exports.raisingHandToast = 'You have raised your hand';
exports.loweringHandToast = 'Your hand has been lowered';
exports.noActiveMicrophoneToast = 'No active microphone. Share your microphone to add audio to this recording.';
// Icons
const baseBbbIcon = 'i.icon-bbb-';
exports.unmuteIcon = `${baseBbbIcon}unmute`;
exports.listenOnlyIcon = `${baseBbbIcon}listen`;
exports.checkedIcon = `${baseBbbIcon}check`;

// Polling
exports.pollQuestion = 'Are we good ?';
exports.answerMessage = 'All good!';
exports.questionSlideFileName = 'mockPollSlide.pdf';
exports.polling = 'li[data-test="polling"]';
exports.startPoll = 'button[data-test="startPoll"]';
exports.restartPoll = 'button[data-test="restartPoll"]';
exports.hidePollDesc = 'button[data-test="hidePollDesc"]';
exports.pollingContainer = 'div[data-test="pollingContainer"]';
exports.pollLetterAlternatives = 'button[data-test="pollLetterAlternatives"]';
exports.pollOptionItem = 'input[data-test="pollOptionItem"]';
exports.anonymousPoll = 'input[data-test="anonymousPollBtn"]';
const pollAnswerOptionBtn = 'button[data-test="publishPollingLabel"]';
exports.publishPollingLabel = pollAnswerOptionBtn;
exports.pollAnswerOptionBtn = 'button[data-test="pollAnswerOption"]';
exports.receivedAnswer = 'td[data-test="receivedAnswer"]';
exports.quickPoll = 'button[data-test="quickPollBtn"]';
exports.pollQuestionArea = 'textarea[data-test="pollQuestionArea"]';
exports.userResponseBtn = 'button[data-test="userResponseBtn"]';
exports.pollAnswerOptionInput = 'input[data-test="pollAnswerOption"]';
exports.pollSubmitAnswer = 'button[data-test="submitAnswer"]';
exports.addPollItem = 'button[data-test="addPollItem"]';
exports.deletePollOption = 'button[data-test="deletePollOption"]';
exports.cancelPollBtn = 'button[data-test="cancelPollLabel"]';
exports.pollYesNoAbstentionBtn = 'button[data-test="pollYesNoAbstentionBtn"]';
exports.noPresentation = 'h4[data-test="noPresentation"]';
exports.autoOptioningPollBtn = 'input[data-test="autoOptioningPollBtn"]';
exports.currentPollQuestion = 'span[data-test="currentPollQuestion"]';
exports.allowMultiple = 'div[data-test="allowMultiple"] > div > input[type="checkbox"]';
exports.pollOptionItem1 = 'input[data-test="pollOptionItem"]>>nth=0';
exports.pollOptionItem2 = 'input[data-test="pollOptionItem"]>>nth=1';
exports.pollAnswerDescTest1 = 'div[data-test="optionsAnswers"]>>nth=0';
exports.pollAnswerDescTest2 = 'div[data-test="optionsAnswers"]>>nth=1';
exports.submitAnswersMultiple = 'button[data-test="submitAnswersMultiple"]';
exports.numberVotes = 'div[data-test="numberVotes"]';
exports.answer1 = 'div[data-test="numberOfVotes"]>>nth=0';
exports.answer2 = 'div[data-test="numberOfVotes"]>>nth=1';
exports.errorNoValueInput = 'div[data-test="errorNoValueInput"]';
exports.smartSlides1 = 'smartSlidesPresentation.pdf';
exports.responsePollQuestion = 'div[data-test="pollQuestion"]';
exports.firstPollAnswerOptionBtn = `${pollAnswerOptionBtn}>>nth=0`;
exports.checkboxInput = `${pollAnswerOptionBtn} > div`;
// Presentation
exports.currentSlideImg = 'img[id="slide-background-shape_image"]';
exports.uploadPresentationFileName = 'uploadTest.png';
exports.presentationPlaceholderLabel = 'There is no currently active presentation';
exports.noPresentationLabel = 'There is no currently active presentation';
exports.startScreenSharing = 'button[data-test="startScreenShare"]';
exports.stopScreenSharing = 'button[data-test="stopScreenShare"]';
exports.managePresentations = 'li[data-test="managePresentations"]';
exports.fileUpload = 'input[type="file"]';
exports.presentationToolbarWrapper = 'div[id="presentationToolbarWrapper"]';
exports.nextSlide = 'button[data-test="nextSlide"]';
exports.prevSlide = 'button[data-test="prevSlide"]';
exports.skipSlide = 'select[data-test="skipSlide"]';
exports.allowPresentationDownload = 'button[data-test="allowPresentationDownload"]';
exports.disallowPresentationDownload = 'button[data-test="disallowPresentationDownload"]';
exports.confirmManagePresentation = 'button[data-test="confirmManagePresentation"]';
exports.toastDownload = 'a[data-test="toastDownload"]';
exports.presentationDownloadBtn = 'button[data-test="presentationDownload"]';
exports.removePresentation = 'button[data-test="removePresentation"]';
exports.presentationPlaceholder = 'div[data-test="presentationPlaceholder"]';
exports.presentationContainer = 'div[data-test="presentationContainer"]';
exports.minimizePresentation = 'button[data-test="minimizePresentation"]';
exports.restorePresentation = 'button[data-test="restorePresentation"]';
exports.shareExternalVideoBtn = 'li[data-test="shareExternalVideo"]';
exports.videoModalInput = 'input[id="video-modal-input"]';
exports.startShareVideoBtn = 'button[data-test="startNewVideo"]';
exports.videoPlayer = 'div[data-test="videoPlayer"]';
exports.presentationTitle = 'h1[data-test="presentationTitle"]';
exports.fitToWidthButton = 'button[data-test="fitToWidthButton"]';
exports.presentationsList = 'div[id="upload-modal"] tbody';
exports.exportPresentationToPublicChat = 'button[data-test="exportPresentationToPublicChat"]';
exports.downloadPresentation = 'div[data-test="downloadPresentationContainer"] > p > a';
exports.downloadPresentationToast = 'div[data-test="downloadPresentationToast"]';
exports.whiteboardOptionsButton = 'button[data-test="whiteboardOptionsButton"]';
exports.presentationFullscreen = 'li[data-test="presentationFullscreen"]';
exports.presentationSnapshot = 'li[data-test="presentationSnapshot"]';
// YouTube frame
exports.youtubeLink = 'https://www.youtube.com/watch?v=Hso8yLzkqj8&ab_channel=BigBlueButton';
// The title we match for here is the title of the test video specified by youtubeLink
exports.youtubeFrame = 'iframe[title~="GreenLight"]';
exports.ytFrameTitle = 'a[class^="ytp-title-link"]';
// Toasts
exports.statingUploadPresentationToast = 'To be uploaded ...';
exports.convertingPresentationFileToast = 'Converting file';
exports.presentationUploadedToast = 'Current presentation';

// Settings
exports.languageSelector = 'select[id="langSelector"]';
exports.messageTitle = 'h2[data-test="messageTitle"]';
exports.notesTitle = 'h2[data-test="notesTitle"]';
exports.dataSavingsTab = 'span[id="dataSaving"]';

// User
const userAvatar = 'div[data-test="userAvatar"]';
const networkDataContainer = 'div[data-test="networkDataContainer"]';
exports.userAvatar = userAvatar;
exports.moderatorAvatar = 'div[data-test="moderatorAvatar"]';
exports.viewerAvatar = 'div[data-test="viewerAvatar"]';
exports.applauseIcon = `${userAvatar} > div > i[class="icon-bbb-applause"]`;
exports.awayIcon = `${userAvatar} > div > i[class="icon-bbb-time"]`;
exports.setStatus = 'li[data-test="setStatus"]';
exports.away = 'li[data-test="away"]';
exports.applaud = 'li[data-test="applause"]';
exports.userListItem = 'div[data-test="userListItem"]';
exports.currentUser = 'div[data-test="userListItemCurrent"]';
exports.multiWhiteboardTool = 'span[data-test="multiWhiteboardTool"]';
exports.manageUsers = 'button[data-test="manageUsers"]';
exports.presenterClassName = 'presenter--';
exports.userListToggleBtn = 'button[data-test="toggleUserList"]';
exports.mobileUser = 'span[data-test="mobileUser"]';
exports.connectionStatusBtn = 'button[data-test="connectionStatusButton"]';
exports.connectionStatusModal = 'div[data-test="connectionStatusModal"]';
exports.copyStats = 'span[data-test="copyStats"]';
exports.dataSavingScreenshare = 'input[data-test="dataSavingScreenshare"]';
exports.screenshareLocked = 'button[data-test="screenshareLocked"]';
exports.connectionStatusItemEmpty = 'div[data-test="connectionStatusItemEmpty"]';
exports.connectionStatusTab2 = 'li[id="react-tabs-2"]';
exports.connectionStatusItemUser = 'div[data-test="connectionStatusItemUser"]';
exports.connectionStatusLinkToSettings = `${networkDataContainer} span[role="button"]`;
exports.dataSavingWebcams = 'input[data-test="dataSavingWebcams"]';
exports.connectionStatusOfflineUser = 'div[data-test="offlineUser"]';
exports.connectionDataContainer = networkDataContainer;
exports.avatarsWrapperAvatar = 'div[data-test="avatarsWrapperAvatar"]';
exports.guestPolicyLabel = 'li[data-test="guestPolicyLabel"]';
exports.downloadUserNamesList = 'li[data-test="downloadUserNamesList"]';
exports.waitingUsersBtn = 'div[data-test="waitingUsersBtn"]';
exports.joinMeetingDemoPage = 'div[class^="join-meeting"]';
exports.askModerator = 'button[data-test="askModerator"]';
exports.alwaysAccept = 'button[data-test="alwaysAccept"]';
exports.alwaysDeny = 'button[data-test="alwaysDeny"]';
exports.selectRandomUser = 'li[data-test="selectRandomUser"]';
exports.noViewersSelectedMessage = 'div[data-test="noViewersSelectedMessage"]';
exports.selectedUserName = 'div[data-test="selectedUserName"]';
exports.selectAgainRadomUser = 'button[data-test="selectAgainRadomUser"]';
exports.promoteToModerator = 'li[data-test="promoteToModerator"]';
exports.demoteToViewer = 'li[data-test="demoteToViewer"]';
exports.makePresenter = 'li[data-test="makePresenter"]';
exports.takePresenter = 'li[data-test="takePresenter"]';
exports.muteAll = 'li[data-test="muteAll"]';
exports.muteAllExceptPresenter = 'li[data-test="muteAllExceptPresenter"]';
exports.error403removedLabel = 'You have been removed from the meeting';

// Lock Viewers
exports.lockViewersButton = 'li[data-test="lockViewersButton"]';
exports.unlockUserButton = 'li[data-test="unlockUserButton"]';
exports.applyLockSettings = 'button[data-test="applyLockSettings"]';
exports.lockShareWebcam = 'input[data-test="lockShareWebcam"]';
exports.lockSeeOtherViewersWebcam = 'input[data-test="lockSeeOtherViewersWebcam"]';
exports.lockShareMicrophone = 'input[data-test="lockShareMicrophone"]';
exports.lockPublicChat = 'input[data-test="lockPublicChat"]';
exports.lockPrivateChat = 'input[data-test="lockPrivateChat"]';
exports.lockEditSharedNotes = 'input[data-test="lockEditSharedNotes"]';
exports.lockUserList = 'input[data-test="lockUserList"]';

// Closed Captions
exports.writeClosedCaptions = 'li[data-test="writeClosedCaptions"]';
exports.startWritingClosedCaptions = 'button[data-test="startWritingClosedCaptions"]';
exports.startViewingClosedCaptionsBtn = 'button[data-test="startViewingClosedCaptionsBtn"]';
exports.startViewingClosedCaptions = 'button[data-test="startViewingClosedCaptions"]';
exports.liveCaptions = 'div[data-test="liveCaptions"]';

// Locales
exports.locales = ['af', 'ar', 'az', 'bg-BG', 'bn', 'ca', 'cs-CZ', 'da', 'de',
  'dv', 'el-GR', 'en', 'eo', 'es', 'es-419', 'es-ES', 'es-MX', 'et', 'eu',
  'fa-IR', 'fi', 'fr', 'gl', 'he', 'hi-IN', 'hr', 'hu-HU', 'hy', 'id', 'it-IT',
  'ja', 'ka', 'km', 'kn', 'ko-KR', 'lo-LA', 'lt-LT', 'lv', 'ml', 'mn-MN',
  'nb-NO', 'nl', 'oc', 'pl-PL', 'pt', 'pt-BR', 'ro-RO', 'ru', 'sk-SK', 'sl',
  'sr', 'sv-SE', 'ta', 'te', 'th', 'tr-TR', 'uk-UA', 'vi-VN', 'zh-CN', 'zh-TW'
];

// Webcam
exports.joinVideo = 'button[data-test="joinVideo"]';
exports.leaveVideo = 'button[data-test="leaveVideo"]';
exports.videoPreview = 'video[data-test="videoPreview"]';
exports.startSharingWebcam = 'button[data-test="startSharingWebcam"]';
exports.webcamConnecting = 'div[data-test="webcamConnecting"]';
exports.webcamContainer = 'video[data-test="videoContainer"]';
exports.webcamVideoItem = 'div[data-test="webcamVideoItem"]';

exports.webcamItemTalkingUser = 'div[data-test="webcamItemTalkingUser"]';
exports.webcamSettingsModal = 'div[data-test="webcamSettingsModal"]';
exports.dropdownWebcamButton = 'div[data-test="dropdownWebcamButton"]';
exports.webcamMirroredVideoPreview = 'video[data-test="mirroredVideoPreview"]';

// Whiteboard
exports.whiteboard = 'div[id="canvas"]';
exports.wbLayer = 'div[data-testid="layer"]';
exports.wbToolbar = 'div[id="TD-PrimaryTools"]';
exports.wbShapesButton = 'button[id="TD-PrimaryTools-Shapes"]';
exports.wbRectangleShape = 'span[id="TD-PrimaryTools-Shapes-rectangle"]';
exports.wbEllipseShape = 'span[id="TD-PrimaryTools-Shapes-ellipse"]';
exports.wbTriangleShape = 'span[id="TD-PrimaryTools-Shapes-triangle"]';
exports.wbLineShape = 'span[id="TD-PrimaryTools-Shapes-line"]';
exports.wbPencilShape = 'button[id="TD-PrimaryTools-Pencil"]';
exports.wbStickyNoteShape = 'button[id="TD-PrimaryTools-Pencil2"]';
exports.wbTextShape = 'button[id="TD-PrimaryTools-Text"]';
exports.wbTypedText = 'div[data-shape="text"]';
exports.wbDrawnRectangle = 'div[data-shape="rectangle"]';
exports.wbDrawnLine = 'div[data-shape="draw"]';
exports.multiUsersWhiteboardOn = 'button[data-test="turnMultiUsersWhiteboardOn"]';
exports.multiUsersWhiteboardOff = 'button[data-test="turnMultiUsersWhiteboardOff"]';
exports.whiteboardViewBox = 'svg g[clip-path="url(#viewBox)"]';
exports.changeWhiteboardAccess = 'li[data-test="changeWhiteboardAccess"]';
exports.pencil = 'button[data-test="pencilTool"]';

// Shared notes
exports.showMoreSharedNotesButton = 'span[class="show-more-icon-btn"]'
exports.exportSharedNotesButton = 'button[aria-label="Import/Export from/to different file formats"]';
exports.exportPlainButton = 'span[id="exportplain"]';
exports.pinNotes = 'li[data-test="pinNotes"]';
exports.unpinNotes = 'button[data-test="unpinNotes"]';

// About modal
exports.showAboutModalButton = 'li[data-test="aboutModal"]';
exports.aboutModal = 'div[data-test="aboutModalTitleLabel"]';

// Help button
exports.helpButton = 'li[data-test="helpButton"]';
exports.helpPageTitle = 'BigBlueButton Tutorials | Built For Teachers | BigBlueButton'

// Dark mode
exports.darkModeToggleBtn = 'input[data-test="darkModeToggleBtn"]';
exports.actionsBarBackground = 'section[id="ActionsBar"]';
exports.navbarBackground = 'header[id="Navbar"]';
exports.fullscreenModal = 'div[id="fsmodal"]';
exports.simpleModal = 'div[id="simpleModal"]';
exports.sharedNotesBackground = 'div[data-test="notes"]';
exports.whiteboardOptionsButton = 'button[data-test="whiteboardOptionsButton"]';
