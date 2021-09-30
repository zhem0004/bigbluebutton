const Page = require('../core/page');
const params = require('../params');
const e = require('../core/elements');
const { checkElement } = require('../core/util');
const { ELEMENT_WAIT_LONGER_TIME } = require('../core/constants');

class Create {
  constructor() {
    this.modPage1 = new Page();
    this.modPage2 = new Page();
    this.userPage1 = new Page();
  }

  // Join BigBlueButton meeting with a Moderator and a Viewer
  async init(meetingId, testName) {
    await this.modPage1.init(Page.getArgs(), meetingId, { ...params, fullName: 'Moderator1' }, undefined, testName);
    await this.userPage1.init(Page.getArgs(), this.modPage1.meetingId, { ...params, fullName: 'Viewer1', moderatorPW: '' }, undefined, testName);
  }

  // Join BigBlueButton meeting with a Viewer only
  async initViewer(testName) {
    await this.userPage2.init(Page.getArgs(), this.modPage1.meetingId, { ...params, fullName: 'Viewer2', moderatorPW: '' }, undefined, testName);
  }

  // Create Breakoutrooms
  async create(testName) {
    try {
      await this.modPage1.closeAudioModal();
      await this.userPage1.closeAudioModal();
      await this.modPage1.screenshot(testName, '01-page01-initialized');
      await this.userPage1.screenshot(testName, '01-page02-initialized');

      await this.modPage1.waitAndClick(e.manageUsers);
      await this.modPage1.waitAndClick(e.createBreakoutRooms);
      await this.modPage1.screenshot(testName, '02-page01-creating-breakoutrooms');

      await this.modPage1.waitAndClick(e.randomlyAssign);
      await this.modPage1.screenshot(testName, '03-page01-randomly-assign-user');

      await this.modPage1.waitAndClick(e.modalConfirmButton, ELEMENT_WAIT_LONGER_TIME);
      await this.modPage1.screenshot(testName, '04-page01-confirm-breakoutrooms-creation');

      // Join breakout room
      await this.userPage1.waitAndClick(e.modalConfirmButton, ELEMENT_WAIT_LONGER_TIME);
      await this.userPage1.screenshot(testName, '02-page02-accept-invite-breakoutrooms');

      await this.userPage1.bringToFront();
      await this.userPage1.waitAndClick(e.chatButton);
      await this.userPage1.waitAndClick(e.breakoutRoomsItem);
      await this.userPage1.waitForSelector(e.alreadyConnected, ELEMENT_WAIT_LONGER_TIME);

      const breakoutUserPage1 = await this.userPage1.getLastTargetPage();
      await breakoutUserPage1.bringToFront();

      await breakoutUserPage1.screenshot(testName, '03-breakout-page02-before-closing-audio-modal');
      await breakoutUserPage1.closeAudioModal();

      await breakoutUserPage1.screenshot(testName, '04-breakout-page02-after-closing-audio-modal');
    } catch (err) {
      await this.modPage1.logger(err);
      return false;
    }
  }

  // Check if Breakoutrooms have been created
  async testCreatedBreakout(testName) {
    try {
      const resp = await this.modPage1.page.evaluate(checkElement, e.breakoutRoomsItem);
      if (resp === true) {
        await this.modPage1.screenshot(`${testName}`, `05-page01-success-${testName}`);

        return true;
      }
      await this.modPage1.screenshot(`${testName}`, `05-page01-fail-${testName}`);

      return false;
    } catch (err) {
      await this.modPage1.logger(err);
      return false;
    }
  }

  // Initialize a Moderator session
  async joinWithMod2(testName) {
    try {
      if (testName === 'joinBreakoutroomsWithAudio') {
        await this.modPage2.init(Page.getArgs(), this.modPage1.meetingId, { ...params, fullName: 'Moderator3' }, undefined, testName);
        await this.modPage2.closeAudioModal();
        await this.modPage2.waitAndClick(e.breakoutRoomsButton);

        await this.modPage2.waitForSelector(e.breakoutRoomsItem);
        await this.modPage2.waitAndClick(e.chatButton);
        await this.modPage2.waitAndClick(e.breakoutRoomsItem);

        await this.modPage2.waitAndClick(e.generateRoom1);
        await this.modPage2.waitAndClick(e.joinGeneratedRoom1);
        await this.modPage2.waitForSelector(e.alreadyConnected, ELEMENT_WAIT_LONGER_TIME);

        const breakoutModPage2 = await this.modPage2.getLastTargetPage();
        await breakoutModPage2.screenshot(testName, `00-breakout-page03-user-joined-no-mic-before-check`);

        await breakoutModPage2.bringToFront();
        await breakoutModPage2.waitAndClick(e.microphoneButton);
        await breakoutModPage2.waitForSelector(e.connectingStatus);
        const parsedSettings = await this.modPage1.getSettingsYaml();
        const listenOnlyCallTimeout = parseInt(parsedSettings.public.media.listenOnlyCallTimeout);
        await breakoutModPage2.waitAndClick(e.echoYesButton, listenOnlyCallTimeout);
        await breakoutModPage2.waitForSelector(e.whiteboard);

        await breakoutModPage2.screenshot(testName, '00-breakout-page03-user-joined-with-mic-before-check');
      } else if (testName === 'joinBreakoutroomsWithVideo') {
        await this.modPage2.init(Page.getArgs(), this.modPage1.meetingId, { ...params, fullName: 'Moderator3' }, undefined, testName);
        await this.modPage2.closeAudioModal();
        await this.modPage2.waitAndClick(e.breakoutRoomsButton);
        await this.modPage2.waitAndClick(e.generateRoom1);
        await this.modPage2.waitAndClick(e.joinGeneratedRoom1);
        await this.modPage2.waitForSelector(e.alreadyConnected);

        const breakoutModPage2 = await this.modPage2.getLastTargetPage();
        await breakoutModPage2.screenshot(testName, '00-breakout-page03-user-joined-no-webcam-before-check');

        await breakoutModPage2.bringToFront();
        await breakoutModPage2.closeAudioModal();
        await breakoutModPage2.waitAndClick(e.joinVideo);
        const parsedSettings = await this.modPage2.getSettingsYaml();
        const videoPreviewTimeout = parseInt(parsedSettings.public.kurento.gUMTimeout);
        await breakoutModPage2.waitAndClick(e.videoPreview, videoPreviewTimeout);
        await breakoutModPage2.waitAndClick(e.startSharingWebcam);

        await breakoutModPage2.screenshot(testName, '00-breakout-page03-user-joined-with-webcam-before-check');
      } else if (testName === 'joinBreakoutroomsAndShareScreen') {
        await this.modPage2.init(Page.getArgs(), this.modPage1.meetingId, { ...params, fullName: 'Moderator3' }, undefined, testName);
        await this.modPage2.closeAudioModal();
        await this.modPage2.waitAndClick(e.breakoutRoomsButton);
        await this.modPage2.waitAndClick(e.generateRoom1);
        await this.modPage2.waitAndClick(e.joinGeneratedRoom1);
        await this.modPage2.waitForSelector(e.alreadyConnected);
        const breakoutModPage2 = await this.modPage2.getLastTargetPage();

        await breakoutModPage2.screenshot(testName, '00-breakout-page03-user-joined-with-screenshare-before-check');
        await breakoutModPage2.bringToFront();
        await breakoutModPage2.closeAudioModal();

        // Take Presenter
        await breakoutModPage2.waitAndClick(e.firstUser);
        await breakoutModPage2.waitAndClick(e.setPresenter);

        // Start Share Screen
        await breakoutModPage2.waitAndClick(e.startScreenSharing);
        await breakoutModPage2.page.on('dialog', async (dialog) => {
          await dialog.accept();
        });
        await breakoutModPage2.screenshot(testName, '00-breakout-page03-user-joined-with-screenshare-after-check');
      } else {
        await this.modPage2.init(Page.getArgs(), this.modPage1.meetingId, { ...params, fullName: 'Moderator3' }, undefined, testName);
        await this.modPage2.closeAudioModal();
      }
    } catch (err) {
      await this.modPage2.logger(err);
    }
  }

  // Close pages
  async close() {
    try {
      await this.modPage1.close();
      await this.userPage1.close();
    } catch (err) {
      await this.modPage1.logger(err);
    }
  }

  // Close page
  async closePage(page) {
    try {
      await page.close();
    } catch (err) {
      await this.modPage1.logger(err);
    }
  }
}

module.exports = exports = Create;
