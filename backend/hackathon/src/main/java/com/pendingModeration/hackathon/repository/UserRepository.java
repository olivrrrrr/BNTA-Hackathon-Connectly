package com.pendingModeration.hackathon.repository;

import com.pendingModeration.hackathon.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

}
