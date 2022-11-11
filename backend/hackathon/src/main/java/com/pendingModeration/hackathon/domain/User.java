package com.pendingModeration.hackathon.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document("users")
public class User {

    @Id
    private String id;

    private String name;

    private String jobTitle;

    private String email;

    private List<String> tags;

    private List<Event> events;

    public User(String id, String name, String jobTitle, String email, List<String> tags, List<Event> events) {
        this.id = id;
        this.name = name;
        this.jobTitle = jobTitle;
        this.email = email;
        this.tags = tags;
        this.events = events;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }

}
