package com.pendingModeration.hackathon.service;

import com.pendingModeration.hackathon.domain.SpecialEvent;
import com.pendingModeration.hackathon.repository.SpecialEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpecialEventService {

    @Autowired
    SpecialEventRepository specialEventRepository;


    public List<SpecialEvent> getAllSpecialEvents() {
        return specialEventRepository.findAll();
    }

    public void addSpecialEvent(SpecialEvent specialEvent) {
        specialEventRepository.save(specialEvent);
    }

    public void removeSpecialEventById(String id){
        specialEventRepository.deleteById(id);
    }
}
