const Join = require('./breakout/join');
const Create = require('./breakout/create');
const Page = require('./core/page');
const { MAX_BREAKOUT_TEST_TIMEOUT } = require('./core/constants');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

const breakoutTest = () => {
  beforeEach(() => {
    jest.setTimeout(MAX_BREAKOUT_TEST_TIMEOUT);
  });

  // Create Breakout Room
  test('Create Breakout room', async () => {
    const test = new Create();
    let response;
    let screenshot;
    try {
      const testName = 'createBreakoutrooms';
      await test.modPage1.logger('begin of ', testName);
      await test.init(undefined, testName);
      await test.modPage1.startRecording(testName);
      await test.create(testName);
      response = await test.testCreatedBreakout(testName);
      const breakoutUserPage1 = await test.userPage1.getLastTargetPage();
      await breakoutUserPage1.bringToFront();
      await test.modPage1.stopRecording();
      screenshot = await breakoutUserPage1.page.screenshot();
      await test.modPage1.logger('end of ', testName);
    } catch (err) {
      await test.modPage1.logger(err);
    } finally {
      await test.close();
    }
    expect(response).toBe(true);
    await Page.checkRegression(8.0, screenshot);
  });

  // Join Breakout Room
  test('Join Breakout room', async () => {
    const test = new Join();
    let response;
    let screenshot;
    try {
      const testName = 'joinBreakoutroomsWithoutFeatures';
      await test.modPage1.logger('begin of ', testName);
      await test.init(undefined, testName);
      await test.modPage1.startRecording(testName);
      await test.create(testName);
      await test.join(testName);
      response = await test.testJoined(testName);
      const breakoutUserPage1 = await test.userPage1.getLastTargetPage();
      await breakoutUserPage1.bringToFront();
      await test.modPage1.stopRecording();
      screenshot = await breakoutUserPage1.page.screenshot();
      await test.modPage1.logger('end of ', testName);
    } catch (err) {
      await test.modPage1.logger(err);
    } finally {
      await test.close();
    }
    expect(response).toBe(true);
    await Page.checkRegression(4.0, screenshot);
  });

  // Join Breakout Room with Video
  test('Join Breakout room with Video', async () => {
    const test = new Join();
    let response;
    let screenshot;
    try {
      const testName = 'joinBreakoutroomsWithVideo';
      await test.modPage1.logger('begin of ', testName);
      await test.init(undefined, testName);
      await test.modPage1.startRecording(testName);
      await test.create(testName);
      await test.join(testName);
      response = await test.testJoined(testName);
      const breakoutUserPage1 = await test.userPage1.getLastTargetPage();
      await breakoutUserPage1.bringToFront();
      await test.modPage1.stopRecording();
      screenshot = await breakoutUserPage1.page.screenshot();
      await test.modPage1.logger('end of ', testName);
    } catch (err) {
      await test.modPage1.logger(err);
    } finally {
      await test.close();
    }
    expect(response).toBe(true);
    await Page.checkRegression(0.6, screenshot);
  });

  // Join Breakout Room and start Screen Share
  test('Join Breakout room and share screen', async () => {
    const test = new Join();
    let response;
    let screenshot;
    try {
      const testName = 'joinBreakoutroomsAndShareScreen';
      await test.modPage1.logger('begin of ', testName);
      await test.init(undefined, testName);
      await test.modPage1.startRecording(testName);
      await test.create(testName);
      await test.join(testName);
      response = await test.testJoined(testName);
      const breakoutUserPage1 = await test.userPage1.getLastTargetPage();
      await breakoutUserPage1.bringToFront();
      await test.modPage1.stopRecording();
      screenshot = await breakoutUserPage1.page.screenshot();
      await test.modPage1.logger('end of ', testName);
    } catch (err) {
      await test.modPage1.logger(err);
    } finally {
      await test.close();
    }
    expect(response).toBe(true);
    await Page.checkRegression(0.7, screenshot);
  });

  // Join Breakout Room with Audio
  test('Join Breakout room with Audio', async () => {
    const test = new Join();
    let response;
    let screenshot;
    try {
      const testName = 'joinBreakoutroomsWithAudio';
      await test.modPage1.logger('begin of ', testName);
      await test.init(undefined, testName);
      await test.modPage1.startRecording(testName);
      await test.create(testName);
      await test.join(testName);
      response = await test.testJoined(testName);
      const breakoutUserPage1 = await test.userPage1.getLastTargetPage();
      await breakoutUserPage1.bringToFront();
      await test.modPage1.stopRecording();
      screenshot = await breakoutUserPage1.page.screenshot();
      await test.modPage1.logger('end of ', testName);
    } catch (err) {
      await test.modPage1.logger(err);
    } finally {
      await test.close();
    }
    expect(response).toBe(true);
    await Page.checkRegression(3.6, screenshot);
  });
};

module.exports = exports = breakoutTest;
