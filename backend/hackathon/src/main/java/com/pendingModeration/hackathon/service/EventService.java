package com.pendingModeration.hackathon.service;

import com.pendingModeration.hackathon.domain.Event;
import com.pendingModeration.hackathon.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    @Autowired
    EventRepository eventRepository;


    public List<Event> getAllEvents() {

        return eventRepository.findAll();
    }

    public void addEvent(Event event) {

        eventRepository.save(event);
    }
}
