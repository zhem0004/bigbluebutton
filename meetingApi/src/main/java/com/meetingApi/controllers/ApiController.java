package com.meetingApi.controllers;

import io.micrometer.core.instrument.util.StringUtils;
import org.bigbluebutton.api.*;
import org.bigbluebutton.api.domain.Meeting;
import org.bigbluebutton.api.service.ValidationService;
import org.bigbluebutton.api.util.ResponseBuilder;
import org.bigbluebutton.web.services.turn.StunTurnService;
import org.json.JSONArray;

import javax.servlet.ServletRequest;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.*;

public class ApiController {

    //88888888[ Temporary ]8888888888888888
    private class TempPropertiesReplacement implements Map<String, String> {

        public String logoutURL;
        public Object html5InstanceId;
        public String voiceBridge;
        public String meetingID;

        public String get(String attendeePW) {
            return attendeePW;
        }

        @Override
        public int size() {
            return 0;
        }

        @Override
        public boolean isEmpty() {
            return false;
        }

        @Override
        public boolean containsKey(Object key) {
            return false;
        }

        @Override
        public boolean containsValue(Object value) {
            return false;
        }

        @Override
        public String get(Object key) {
            return null;
        }

        @Override
        public String put(String key, String value) {
            return null;
        }

        @Override
        public String remove(Object key) {
            return null;
        }

        @Override
        public void putAll(Map<? extends String, ? extends String> m) {

        }

        @Override
        public void clear() {

        }

        @Override
        public Set<String> keySet() {
            return null;
        }

        @Override
        public Collection<String> values() {
            return null;
        }

        @Override
        public Set<Entry<String, String>> entrySet() {
            return null;
        }
    }

    TempPropertiesReplacement params =null;
    //888888888888888888888888888888888888888

    private static final Integer SESSION_TIMEOUT = 14400;  // 4 hours
    private static final String CONTROLLER_NAME = "ApiController";
    protected static final String RESP_CODE_SUCCESS = "SUCCESS";
    protected static final String RESP_CODE_FAILED = "FAILED";
    private static final String ROLE_MODERATOR = "MODERATOR";
    private static final String ROLE_ATTENDEE = "VIEWER";
    protected static Boolean REDIRECT_RESPONSE = true;

    MeetingService meetingService;
    ParamsProcessorUtil paramsProcessorUtil;
    ClientConfigService configService;
    StunTurnService stunTurnService;
    ValidationService validationService;
    HTML5LoadBalancingService html5LoadBalancingService;
    ResponseBuilder responseBuilder = initResponseBuilder();

    private ResponseBuilder initResponseBuilder() {
        return null;
    }
    private Map.Entry<String, String> validateRequest(ValidationService.ApiCall apiCall, Map<String, String[]> params, String queryString) {
        Map<String, String> violations = validationService.validate(apiCall, params, queryString);
        Map.Entry<String, String> response = null;

        if(!violations.isEmpty()) {
            for (Map.Entry<String, String> violation: violations.entrySet()) {
                //log.error violation.getValue();
            }
            for(Map.Entry<String, String> violation: violations.entrySet()) {
                response = new AbstractMap.SimpleEntry<String, String>(violation.getKey(), violation.getValue());
            }
        }

        return response;
    }

        private void respondWithRedirect(JSONArray errorsJSONArray) throws URISyntaxException {
        String logoutUrl = paramsProcessorUtil.getDefaultLogoutUrl();
        URI oldUri = URI.create(logoutUrl);

            if (!StringUtils.isEmpty(params.logoutURL)) {
            try {
                oldUri = URI.create(params.logoutURL);
            } catch (Exception e) {
                // Do nothing, the variable oldUri was already initialized
            }
        }

        String newQuery = oldUri.getQuery();

        if (newQuery == null) {
            newQuery = "errors=";
        } else {
            newQuery += "&" + "errors=";
        }
        newQuery += errorsJSONArray;

        URI newUri = new URI(oldUri.getScheme(), oldUri.getAuthority(), oldUri.getPath(), newQuery, oldUri.getFragment());

        // log.debug "Constructed logout URL {}", newUri.toString();
        // redirect(url: newUri);
    }


    //TODO: method added for backward compatibility, it will be removed in next versions after 0.8
    private void invalid(String key, String msg, Boolean redirectResponse) throws URISyntaxException {
        // Note: This xml scheme will be DEPRECATED.
        // log.debug CONTROLLER_NAME + "#invalid " + msg
        if (redirectResponse) {
            ArrayList<Object> errors = new ArrayList<Object>();
            Map<String, String> errorMap = new LinkedHashMap<String, String>();
            errorMap.put("key", key);
            errorMap.put("message", msg);
            errors.add(errorMap);

            JSONArray errorsJSONArray = new JSONArray(errors);
            //log.debug "JSON Errors {}", errorsJSONArray.toString()

            respondWithRedirect(errorsJSONArray);
        } else {
//            response.addHeader("Cache-Control", "no-cache");
//            withFormat {
//                xml {
//                    render(text: responseBuilder.buildError(key, msg, RESP_CODE_FAILED), contentType: "text/xml")
//                }
//                json {
//                    log.debug "Rendering as json"
//                    def builder = new JsonBuilder()
//                    builder.response {
//                        returncode RESP_CODE_FAILED
//                        messageKey key
//                        message msg
//                    }
//                    render(contentType: "application/json", text: builder.toPrettyString())
//                }
//            }
        }
    }


    public void create(ServletRequest request) throws URISyntaxException {

        String[] ap = request.getParameterMap().get("attendeePW");
        String attendeePW;
//        if(ap == null) log.info("No attendeePW provided");
//        else attendeePW = ap[0];

        String[] mp = request.getParameterMap().get("moderatorPW");
        String moderatorPW;
//        if(mp == null) log.info("No moderatorPW provided");
//        else moderatorPW = mp[0];

//        if(attendeePW.equals("")) log.info("attendeePW is empty");
//        if(moderatorPW.equals("")) log.info("moderatorPW is empty");

        Map.Entry<String, String> validationResponse = validateRequest(
                ValidationService.ApiCall.CREATE,
                request.getParameterMap(),
                null //request.getQueryString()
        );

        if(!(validationResponse == null)) {
            invalid(validationResponse.getKey(), validationResponse.getValue(), false);
            return;
        }

        // Ensure unique TelVoice. Uniqueness is not guaranteed by paramsProcessorUtil.
        if (params.voiceBridge == null) {
            // Try up to 10 times. We should find a valid telVoice quickly unless
            // the server hosts ~100k meetings (default 5-digit telVoice)
            for (int i = 10; i>0; i--) {
                String telVoice = paramsProcessorUtil.processTelVoice("");
                if (meetingService.getNotEndedMeetingWithTelVoice(telVoice) == null) {
                    params.voiceBridge = telVoice;
                }
            }
            // Still no unique voiceBridge found? Let createMeeting handle it.
        }

        // params.html5InstanceId = html5LoadBalancingService.findSuitableHTML5ProcessByRoundRobin().toString();

        Meeting newMeeting = paramsProcessorUtil.processCreateParams(params);

        ApiErrors errors = new ApiErrors();

        if (meetingService.createMeeting(newMeeting)) {
            // See if the request came with pre-uploading of presentation.
//            uploadDocuments(newMeeting, false);  //
//            respondWithConference(newMeeting, null, null);
        } else {
            // Translate the external meeting id into an internal meeting id.
            String internalMeetingId = paramsProcessorUtil.convertToInternalMeetingId(params.meetingID);
            Meeting existing = meetingService.getNotEndedMeetingWithId(internalMeetingId);
            if (existing != null) {

                Map<String, Object> updateParams = paramsProcessorUtil.processUpdateCreateParams((Map<String, String>) params);
                if (existing.getViewerPassword().equals(params.get("attendeePW")) && existing.getModeratorPassword().equals(params.get("moderatorPW"))) {
                    //paramsProcessorUtil.updateMeeting(updateParams, existing);
                    // trying to create a conference a second time, return success, but give extra info
                    // Ignore pre-uploaded presentations. We only allow uploading of presentation once.
                    //uploadDocuments(existing);
                    //respondWithConference(existing, "duplicateWarning", "This conference was already in existence and may currently be in progress.");
                } else {
                    // BEGIN - backward compatibility
                    invalid("idNotUnique", "A meeting already exists with that meeting ID.  Please use a different meeting ID.", false);
                    return;
                            // END - backward compatibility

                            // enforce meetingID unique-ness
                            // errors.nonUniqueMeetingIdError();
                    //respondWithErrors(errors);
                }

                return;
            } else {
//                Meeting existingTelVoice = meetingService.getNotEndedMeetingWithTelVoice(newMeeting.getTelVoice());
//                Meeting existingWebVoice = meetingService.getNotEndedMeetingWithWebVoice(newMeeting.getWebVoice());
//                if (existingTelVoice != null || existingWebVoice != null) {
//                    // log.error "VoiceBridge already in use by another meeting (different meetingId)"
//                    errors.nonUniqueVoiceBridgeError();
//                    respondWithErrors(errors);
//                }
            }
        }
    }

}
