package com.pendingModeration.hackathon.repository;

import com.pendingModeration.hackathon.domain.Event;
import com.pendingModeration.hackathon.domain.SpecialEvent;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpecialEventRepository extends MongoRepository<SpecialEvent, String> {
}
