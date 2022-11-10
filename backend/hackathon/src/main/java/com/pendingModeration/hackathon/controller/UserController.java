package com.pendingModeration.hackathon.controller;

import com.pendingModeration.hackathon.domain.User;
import com.pendingModeration.hackathon.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@Controller
@RequestMapping("api/v1")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping(value = "/users", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping(value = "/users", consumes = APPLICATION_JSON_VALUE)
        public ResponseEntity addUser(@RequestBody User user) {
        //System.out.println(user.toString());
        userService.addUser(user);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping(value="/addUserToEvent/event={eventId}/user={userId}")
    public ResponseEntity addEventForUser(@PathVariable ("eventId") String eventId, @PathVariable("userId") String userId) {
        try {
            userService.addUserToEvent(eventId, userId);
        } catch (Exception e) {
            throw new RuntimeException("User already attending event");
        }

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping(value="/removeEventFromUser/event={eventId}/user={userId}")
    public ResponseEntity removeEventFromUser(@PathVariable ("eventId") String eventId, @PathVariable("userId") String userId) {
        try {
            userService.removeEventFromUser(eventId, userId);
        } catch (Exception e) {
            throw new RuntimeException("User not attending event");
        }
        //userService.removeEventFromUser(eventId, userId);


        return new ResponseEntity<>(HttpStatus.OK);
    }

}
