package com.pendingModeration.hackathon.repository;

import com.pendingModeration.hackathon.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

}
