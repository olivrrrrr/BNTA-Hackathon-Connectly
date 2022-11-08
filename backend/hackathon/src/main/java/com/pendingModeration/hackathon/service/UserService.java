package com.pendingModeration.hackathon.service;

import com.pendingModeration.hackathon.domain.Event;
import com.pendingModeration.hackathon.domain.User;
import com.pendingModeration.hackathon.repository.EventRepository;
import com.pendingModeration.hackathon.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    EventRepository eventRepository;

    public void addUser(User user) {
        userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void addUserToEvent(String eventId, String userId) {

        //Add user to event
        Event event= eventRepository.findById(eventId).get();
        List<String> eventAttendees = event.getAttendees();
        //validation to check user isn't already to added to event
        eventAttendees.add(userId);
        event.setAttendees(eventAttendees);
        eventRepository.save(event);

        //Add event to user
        User user = userRepository.findById(userId).get();
        List<Event> userEvents = user.getEvents();
        userEvents.add(event);
        user.setEvents(userEvents);
        userRepository.save(user);
    }
}
