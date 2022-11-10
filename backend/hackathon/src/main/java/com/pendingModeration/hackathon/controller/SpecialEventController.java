package com.pendingModeration.hackathon.controller;

import com.pendingModeration.hackathon.domain.SpecialEvent;
import com.pendingModeration.hackathon.service.SpecialEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@Controller
@RequestMapping("api/v1")
public class SpecialEventController {

    @Autowired
    SpecialEventService specialEventService;

    @GetMapping(value = "/specialEvents", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity getAllSpecialEvents(){
        List<SpecialEvent> specialEvents = specialEventService.getAllSpecialEvents();
        return new ResponseEntity<>(specialEvents, HttpStatus.OK);
    }

    @PostMapping(value = "/specialEvents", consumes = APPLICATION_JSON_VALUE)
    public  ResponseEntity addSpecialEvent(@RequestBody SpecialEvent specialEvent) {
        specialEventService.addSpecialEvent(specialEvent);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(value = "/specialEvents/{id}")
    public ResponseEntity deleteSpecialEvent(@PathVariable ("id") String id){
        specialEventService.removeSpecialEventById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
