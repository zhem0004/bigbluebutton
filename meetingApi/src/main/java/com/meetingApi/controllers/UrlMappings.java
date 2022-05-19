package com.meetingApi.controllers;

import java.net.URISyntaxException;
import java.util.List;

import com.meetingApi.repositories.MeetingRepository;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UrlMappings {

    private final MeetingRepository repository;

    public UrlMappings(MeetingRepository repository) {
        this.repository = repository;
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @GetMapping("/error")
    public void loadErrorPage() {
    }

    @GetMapping
    public void loadIndex() {
        repository.loadIndex();
    }

    @PostMapping
    public void setPollXML(@PathVariable String id) {
        repository.setPollXML();
    }
  
    @GetMapping("/meetings")
    public void getMeetings() {
        repository.getMeetings();
    }
  
    @GetMapping("/sessions")
    public void getSessions() {
        repository.getSessions();
    }

    @GetMapping("/wait/{id}")
    public void guestWait(@PathVariable String id) {
        repository.guestWait(id);
    }

    @GetMapping("/validate/{token}")
    public boolean validateAuthToken(@PathVariable String token) {
        return repository.validateAuthToken(token);
    }
  
    @GetMapping("/meeting/{action}/{id}")
    public void takeAction(@PathVariable String action, @PathVariable String id) throws URISyntaxException {
        // apply constraints here
        repository.takeAction(action, id);
    }
  

}
