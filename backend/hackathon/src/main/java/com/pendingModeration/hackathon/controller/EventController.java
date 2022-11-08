package com.pendingModeration.hackathon.controller;

import com.pendingModeration.hackathon.domain.Event;
import com.pendingModeration.hackathon.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RequestMapping("api/v1")
@Controller
public class EventController {

    @Autowired
    EventService eventService;

    @GetMapping(value = "/events", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Event>> getAllEvents() {

        List<Event> events = eventService.getAllEvents();
        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    @PostMapping(value = "/events", consumes = APPLICATION_JSON_VALUE)
    public ResponseEntity addEvent(@RequestBody Event event) {

        eventService.addEvent(event);

        return new ResponseEntity<>(HttpStatus.OK);

    }
}
