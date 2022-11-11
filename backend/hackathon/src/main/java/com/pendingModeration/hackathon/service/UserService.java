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

    public void addUserToEvent(String eventId, String userId) throws Exception {
        //get the user and event data
        Event event= eventRepository.findById(eventId).get();
        List<String> eventAttendees = event.getAttendees();
        User user = userRepository.findById(userId).get();
        List<Event> userEvents = user.getEvents();
        //validation to check user isn't already to added to event
        boolean canAdd = true;
        for (int i = 0; i < eventAttendees.size(); i++) {
            if (eventAttendees.get(i).equals(userId)) {
                canAdd = false;
                break;
            }
        }
        if (canAdd){
            //Add user to event
            eventAttendees.add(userId);
            event.setAttendees(eventAttendees);
            eventRepository.save(event);

            //Add event to user
            userEvents.add(event);
            user.setEvents(userEvents);
            userRepository.save(user);
        }
        else{
            throw new Exception("");
        }
    }

    public void removeEventFromUser(String eventId, String userId) throws Exception {
        //get the user and event data
        Event event= eventRepository.findById(eventId).get();
        List<String> eventAttendees = event.getAttendees();
        User user = userRepository.findById(userId).get();
        List<Event> userEvents = user.getEvents();

        //validation to check user isn't already to added to event
        boolean canRemove = false;
        for (int i = 0; i < eventAttendees.size(); i++) {
            System.out.println(userId);
            System.out.println(eventAttendees.get(i));
            if (eventAttendees.get(i).equals(userId)) {
                eventAttendees.remove(i);
                for (int j = 0; j < userEvents.size(); j++) {
                    if (userEvents.get(j).getId().equals(eventId)){
                        userEvents.remove(j);
                        break;
                    }
                }
                canRemove = true;
                break;
            }
        }

        System.out.println("Hello");
        System.out.println(canRemove);

        if (canRemove){
            event.setAttendees(eventAttendees);
            eventRepository.save(event);
            user.setEvents(userEvents);
            userRepository.save(user);
        }
        else {
            throw new Exception("");
        }
    }
}
