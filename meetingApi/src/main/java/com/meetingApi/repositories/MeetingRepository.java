package com.meetingApi.repositories;


import java.net.URISyntaxException;

import javax.servlet.ServletRequest;

import com.meetingApi.controllers.ApiController;

import org.springframework.stereotype.Repository;

@Repository
public class MeetingRepository {

    ApiController controller = new ApiController();

    public void loadIndex() {
    }

    public void takeAction(String action, String id) throws URISyntaxException {

        if (action == "create") {
            ServletRequest request = null;
            controller.create(request);
        }

        
    }

    public void guestWait(String id) {
        
    }

    public boolean validateAuthToken(String token) {
        return false;
    }

    public void getSessions() {
        
    }

    public void getMeetings() {
        
    }

    public void setPollXML() {
        
    }
    
}
