package com.meetingApi.config;

import com.meetingApi.services.ClientConfigServiceHelperImp;
import org.bigbluebutton.api.*;
import org.bigbluebutton.api.messaging.MessageDistributor;
import org.bigbluebutton.api.messaging.MessageListener;
import org.bigbluebutton.api.messaging.ReceivedMessageHandler;
import org.bigbluebutton.api.service.ServiceUtils;
import org.bigbluebutton.api.service.ValidationService;
import org.bigbluebutton.api2.BbbWebApiGWApp;
import org.bigbluebutton.api2.IBbbWebApiGWApp;
import org.bigbluebutton.api2.bus.OldMessageReceivedGW;
import org.bigbluebutton.common2.redis.RedisStorageService;
import org.bigbluebutton.web.services.EnteredUserCleanupTimerTask;
import org.bigbluebutton.web.services.KeepAliveService;
import org.bigbluebutton.web.services.UserCleanupTimerTask;
import org.bigbluebutton.web.services.WaitingGuestCleanupTimerTask;
import org.bigbluebutton.web.services.callback.CallbackUrlService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.web.filter.CharacterEncodingFilter;

import java.util.HashSet;
import java.util.Set;

@Configuration
@ComponentScan("com.meetingApi")
public class AppConfig {

    // @Bean("")
    // public(){
    //     return 
    // }

    @Bean("validator")
    public LocalValidatorFactoryBean validator() {
        return new LocalValidatorFactoryBean();
    }

    @Bean("characterEncodingFilter")
    public CharacterEncodingFilter characterEncodingFilter(){
        CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter();
        characterEncodingFilter.setEncoding("UTF-8");
        return characterEncodingFilter;
    }

    @Bean("waitingGuestCleanupTimerTask")
    public WaitingGuestCleanupTimerTask waitingGuestCleanupTimerTask(){
        return new WaitingGuestCleanupTimerTask();
    }

    @Bean("userCleanupTimerTask")
    public UserCleanupTimerTask userCleanupTimerTask(){
        return new UserCleanupTimerTask();
    }

    @Bean("enteredUserCleanupTimerTask")
    public EnteredUserCleanupTimerTask enteredUserCleanupTimerTask(){
        return new EnteredUserCleanupTimerTask();
    }

    // // From here Beans are custom to BBB

    @Bean(initMethod="start", destroyMethod="stop", name="redisStorageService")
    public RedisStorageService redisStorageService(){
        RedisStorageService redisStorageService = new RedisStorageService();
        // redisHost=127.0.0.1
        // redisPort=6379
        // redisPassword=
        // redisKeyExpiry=1209600
        redisStorageService.setHost("127.0.0.1");
        redisStorageService.setPort(6379);
        redisStorageService.setPassword("");
        redisStorageService.setClientName("BbbWeb");

        return redisStorageService;
    }

    @Bean(initMethod="start", destroyMethod="stop", name="redisMessageHandler")
    public ReceivedMessageHandler redisMessageHandler(){
        ReceivedMessageHandler redisMessageHandler = new ReceivedMessageHandler();
        return redisMessageHandler;
    }

    // @Bean("redisMessageDistributor")
    // public MessageDistributor redisMessageDistributor(){
    //     MessageDistributor redisMessageDistributor = new MessageDistributor();

    //     Set<MessageListener> listeners = new HashSet<MessageListener>();
    //     listeners.add((MessageListener) meetingService());
    //     listeners.add((MessageListener) keepAliveService());

    //     redisMessageDistributor.setMessageListeners(listeners);
    //     redisMessageDistributor.setMessageHandler(redisMessageHandler());

    //     return redisMessageDistributor;
    // }


    // @Bean(initMethod="start", destroyMethod="stop", name="keepAliveService")
    // public KeepAliveService keepAliveService(){
    //     KeepAliveService keepAliveService = new KeepAliveService();
    //     keepAliveService.setRunEvery(Long.parseLong(System.getenv("checkBBBServerEvery")));
    //     keepAliveService.setGw();
    //     return keepAliveService;
    // }

    // @Bean(initMethod="start", destroyMethod="stop", name="meetingService")
    // public MeetingService meetingService() {
    //     MeetingService meetingService = new MeetingService();

    //     //meetingService.setPresDownloadService(presDownloadService());
    //     meetingService.setParamsProcessorUtil(paramsProcessorUtil());
    //     //meetingService.setRecordingService(recordingService());
    //     meetingService.setLearningDashboardService(learningDashboardService());
    //     meetingService.setRedisStorageService(redisStorageService());
    //     meetingService.setCallbackUrlService(callbackUrlService());
    //     meetingService.setGw(bbbWebApiGWApp());
    //     meetingService.setWaitingGuestCleanupTimerTask(waitingGuestCleanupTimerTask());
    //     meetingService.setEnteredUserCleanupTimerTask(enteredUserCleanupTimerTask());
    //     meetingService.setUserCleanupTimerTask(userCleanupTimerTask());
    //     //meetingService.setStunTurnService(stunTurnService());
    //     meetingService.setUsersTimeout(Long.parseLong(System.getenv("usersTimeout")));
    //     meetingService.setWaitingGuestUsersTimeout(Long.parseLong(System.getenv("waitingGuestUsersTimeout")));
    //     meetingService.setEnteredUsersTimeout(Long.parseLong(System.getenv("enteredUsersTimeout")));
    //     //meetingService.setSwfSlidesGenerationProgressNotifier(swfSlidesGenerationProgressNotifier());
        
    //     return meetingService;
    // }

    @Bean("oldMessageReceivedGW")
    public OldMessageReceivedGW oldMessageReceivedGW(){
        OldMessageReceivedGW oldMessageReceivedGW = new OldMessageReceivedGW(redisMessageHandler());
        return oldMessageReceivedGW;
    }

    @Bean("callbackUrlService")
    public CallbackUrlService callbackUrlService(){
        CallbackUrlService callbackUrlService = new CallbackUrlService();
        return callbackUrlService;
    }

    // @Bean("bbbWebApiGWApp")
    // public BbbWebApiGWApp bbbWebApiGWApp(){
    //         // redisHost=127.0.0.1
    //         // redisPort=6379
    //         // redisPassword=
    //         // redisKeyExpiry=1209600
    //         // System.getenv("redisHost"),
    //         // Integer.parseInt(System.getenv("redisPort")),
    //         // System.getenv("redisPassword"),
    //         // Integer.parseInt(System.getenv("redisKeyExpiry"))
    //     BbbWebApiGWApp bbbWebApiGWApp = new BbbWebApiGWApp(
    //         oldMessageReceivedGW(),
    //         "127.0.0.1",
    //         6379,
    //         "",
    //         1209600
    //     );
    //     return bbbWebApiGWApp;
    // }

    @Bean("learningDashboardService")
    public LearningDashboardService learningDashboardService(){
        LearningDashboardService learningDashboardService = new LearningDashboardService();
        learningDashboardService.setLearningDashboardFilesDir(System.getenv("learningDashboardFilesDir"));
        return learningDashboardService;
    }

    @Bean("html5LoadBalancingService")
    public HTML5LoadBalancingService html5LoadBalancingService(){
        HTML5LoadBalancingService html5LoadBalancingService = new HTML5LoadBalancingService();
        return html5LoadBalancingService;
    }

    @Bean("configServiceHelper")
    public ClientConfigServiceHelperImp configServiceHelper(){
        ClientConfigServiceHelperImp configServiceHelper = new ClientConfigServiceHelperImp();
        return configServiceHelper;
    }

    @Bean("configService")
    public ClientConfigService configService(){
        ClientConfigService configService = new ClientConfigService();
        configService.setConfigDir(System.getenv("configDir"));
        configService.setClientConfigServiceHelper((IClientConfigServiceHelper) configServiceHelper());
        return configService;
    }

    @Bean("validationService")
    public ValidationService validationService(){
        ValidationService validationService = new ValidationService();
        validationService.setSecuritySalt(System.getenv("securitySalt"));
        validationService.setAllowRequestsWithoutSession(Boolean.valueOf(System.getenv("allowRequestsWithoutSession")));
        return validationService;
    }

    // @Bean("serviceUtils")
    // public ServiceUtils serviceUtils(){
    //     ServiceUtils serviceUtils = new ServiceUtils();
    //     serviceUtils.setMeetingService(meetingService());
    //     serviceUtils.setValidationService(validationService());
    //     return serviceUtils;
    // }

    // @Bean("paramsProcessorUtil")
    // public ParamsProcessorUtil paramsProcessorUtil(){
    //     ParamsProcessorUtil paramsProcessorUtil = new ParamsProcessorUtil();

    //     paramsProcessorUtil.setApiVersion(System.getenv("apiVersion"));
    //     paramsProcessorUtil.setServiceEnabled(Boolean.parseBoolean(System.getenv("serviceEnabled")));
    //     paramsProcessorUtil.setSecuritySalt(System.getenv("securitySalt"));
    //     paramsProcessorUtil.setDefaultMaxUsers(Integer.parseInt(System.getenv("defaultMaxUsers")));
    //     paramsProcessorUtil.setDefaultWelcomeMessage(System.getenv("defaultWelcomeMessage"));
    //     paramsProcessorUtil.setDefaultWelcomeMessageFooter(System.getenv("defaultWelcomeMessageFooter"));
    //     paramsProcessorUtil.setDefaultDialAccessNumber(System.getenv("defaultDialAccessNumber"));
    //     paramsProcessorUtil.setTestVoiceBridge(System.getenv("testVoiceBridge"));
    //     paramsProcessorUtil.setTestConferenceMock(System.getenv("testConferenceMock"));
    //     paramsProcessorUtil.setDefaultLogoutUrl(System.getenv("bigbluebutton.web.logoutURL"));
    //     paramsProcessorUtil.setDefaultServerUrl(System.getenv("bigbluebutton.web.serverURL"));
    //     paramsProcessorUtil.setDefaultNumDigitsForTelVoice(Integer.parseInt(System.getenv("defaultNumDigitsForTelVoice")));
    //     paramsProcessorUtil.setDefaultHTML5ClientUrl(System.getenv("defaultHTML5ClientUrl"));
    //     paramsProcessorUtil.setDefaultGuestWaitURL(System.getenv("defaultGuestWaitURL"));
    //     paramsProcessorUtil.setUseDefaultLogo(Boolean.valueOf(System.getenv("useDefaultLogo")));
    //     paramsProcessorUtil.setDefaultLogoURL(System.getenv("defaultLogoURL"));
    //     paramsProcessorUtil.setAllowRequestsWithoutSession(Boolean.valueOf(System.getenv("allowRequestsWithoutSession")));
    //     paramsProcessorUtil.setDefaultMeetingDuration(Integer.parseInt(System.getenv("defaultMeetingDuration")));
    //     paramsProcessorUtil.setDisableRecordingDefault(Boolean.parseBoolean(System.getenv("disableRecordingDefault")));
    //     paramsProcessorUtil.setAutoStartRecording(Boolean.parseBoolean(System.getenv("autoStartRecording")));
    //     paramsProcessorUtil.setAllowStartStopRecording(Boolean.parseBoolean(System.getenv("allowStartStopRecording")));
    //     paramsProcessorUtil.setLearningDashboardEnabled(Boolean.parseBoolean(System.getenv("learningDashboardEnabled:true"))); //SPECIAL CASE
    //     paramsProcessorUtil.setLearningDashboardCleanupDelayInMinutes(Integer.parseInt(System.getenv("learningDashboardCleanupDelayInMinutes")));
    //     paramsProcessorUtil.setWebcamsOnlyForModerator(Boolean.parseBoolean(System.getenv("webcamsOnlyForModerator")));
    //     paramsProcessorUtil.setDefaultMeetingCameraCap(Integer.valueOf(System.getenv("meetingCameraCap")));
    //     paramsProcessorUtil.setDefaultUserCameraCap(Integer.valueOf(System.getenv("userCameraCap")));
    //     //paramsProcessorUtil.setDefaultMaxPinnedCameras(System.getenv("maxPinnedCameras"));
    //     paramsProcessorUtil.setUseDefaultAvatar(Boolean.valueOf(System.getenv("useDefaultAvatar")));
    //     paramsProcessorUtil.setdefaultAvatarURL(System.getenv("defaultAvatarURL"));
    //     paramsProcessorUtil.setDefaultGuestPolicy(System.getenv("defaultGuestPolicy"));
    //     paramsProcessorUtil.setAuthenticatedGuest(Boolean.valueOf(System.getenv("authenticatedGuest")));
    //     paramsProcessorUtil.setDefaultMeetingLayout(System.getenv("defaultMeetingLayout"));
    //     paramsProcessorUtil.setClientLogoutTimerInMinutes(Integer.valueOf(System.getenv("clientLogoutTimerInMinutes")));
    //     paramsProcessorUtil.setMeetingExpireWhenLastUserLeftInMinutes(Integer.valueOf(System.getenv("meetingExpireWhenLastUserLeftInMinutes")));
    //     paramsProcessorUtil.setMeetingExpireIfNoUserJoinedInMinutes(Integer.valueOf(System.getenv("meetingExpireIfNoUserJoinedInMinutes")));
    //     paramsProcessorUtil.setUserInactivityInspectTimerInMinutes(Integer.valueOf(System.getenv("userInactivityInspectTimerInMinutes")));
    //     paramsProcessorUtil.setUserInactivityThresholdInMinutes(Integer.valueOf(System.getenv("userInactivityThresholdInMinutes")));
    //     paramsProcessorUtil.setUserActivitySignResponseDelayInMinutes(Integer.valueOf(System.getenv("userActivitySignResponseDelayInMinutes")));
    //     paramsProcessorUtil.setMaxPresentationFileUpload(Long.valueOf(System.getenv("maxFileSizeUpload")));
    //     paramsProcessorUtil.setMuteOnStart(Boolean.valueOf(System.getenv("muteOnStart")));
    //     paramsProcessorUtil.setDefaultKeepEvents(Boolean.valueOf(System.getenv("defaultKeepEvents")));
    //     paramsProcessorUtil.setAllowModsToUnmuteUsers(Boolean.valueOf(System.getenv("allowModsToUnmuteUsers")));
    //     paramsProcessorUtil.setAllowModsToEjectCameras(Boolean.valueOf(System.getenv("allowModsToEjectCameras")));
    //     paramsProcessorUtil.setBreakoutRoomsEnabled(Boolean.valueOf(System.getenv("breakoutRoomsEnabled:true"))); //SPECIAL CASE
    //     paramsProcessorUtil.setBreakoutRoomsRecord(Boolean.valueOf(System.getenv("breakoutRoomsRecord")));
    //     paramsProcessorUtil.setBreakoutRoomsPrivateChatEnabled(Boolean.valueOf(System.getenv("breakoutRoomsPrivateChatEnabled")));
    //     paramsProcessorUtil.setLockSettingsDisableCam(Boolean.valueOf(System.getenv("lockSettingsDisableCam")));
    //     paramsProcessorUtil.setLockSettingsDisableMic(Boolean.valueOf(System.getenv("lockSettingsDisableMic")));
    //     paramsProcessorUtil.setLockSettingsDisablePrivateChat(Boolean.valueOf(System.getenv("lockSettingsDisablePrivateChat")));
    //     paramsProcessorUtil.setLockSettingsDisablePublicChat(Boolean.valueOf(System.getenv("lockSettingsDisablePublicChat")));
    //     paramsProcessorUtil.setLockSettingsDisableNotes(Boolean.valueOf(System.getenv("lockSettingsDisableNotes")));
    //     paramsProcessorUtil.setLockSettingsHideUserList(Boolean.valueOf(System.getenv("lockSettingsHideUserList")));
    //     paramsProcessorUtil.setLockSettingsLockedLayout(Boolean.valueOf(System.getenv("lockSettingsLockedLayout")));
    //     paramsProcessorUtil.setLockSettingsLockOnJoin(Boolean.valueOf(System.getenv("lockSettingsLockOnJoin")));
    //     paramsProcessorUtil.setLockSettingsLockOnJoinConfigurable(Boolean.valueOf(System.getenv("lockSettingsLockOnJoinConfigurable")));
    //     paramsProcessorUtil.setLockSettingsHideViewersCursor(Boolean.valueOf(System.getenv("lockSettingsHideViewersCursor")));
    //     paramsProcessorUtil.setAllowDuplicateExtUserid(Boolean.valueOf(System.getenv("allowDuplicateExtUserid")));
    //     paramsProcessorUtil.setEndWhenNoModerator(Boolean.valueOf(System.getenv("endWhenNoModerator")));
    //     paramsProcessorUtil.setEndWhenNoModeratorDelayInMinutes(Integer.valueOf(System.getenv("endWhenNoModeratorDelayInMinutes")));
    //     paramsProcessorUtil.setDisabledFeatures(System.getenv("disabledFeatures"));
    //     //paramsProcessorUtil.setNotifyRecordingIsOn(System.getenv("notifyRecordingIsOn"));
    //     paramsProcessorUtil.setAllowRevealOfBBBVersion(Boolean.valueOf(System.getenv("allowRevealOfBBBVersion")));
    //     return paramsProcessorUtil;
    // }
}