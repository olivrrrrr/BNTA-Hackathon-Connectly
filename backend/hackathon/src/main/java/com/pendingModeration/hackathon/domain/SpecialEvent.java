package com.pendingModeration.hackathon.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Document("specialEvents")
public class SpecialEvent {

    @Id
    private String id;
    private String title;
    private String description;
    private Instant startDate;
    private Instant endDate;
    private String imageURL;

    //this will be a sentence to serve on the frontend e.g.
    //"so you should consider events without alcohol or arrange meals after sundown"
    //could be the eventSentence during Ramadan
    private String eventSentence;

    public SpecialEvent(String id, String title, String description, Instant startDate, Instant endDate, String imageURL, String eventSentence) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.imageURL = imageURL;
        this.eventSentence = eventSentence;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Instant getStartDate() {
        return startDate;
    }

    public void setStartDate(Instant startDate) {
        this.startDate = startDate;
    }

    public Instant getEndDate() {
        return endDate;
    }

    public void setEndDate(Instant endDate) {
        this.endDate = endDate;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public String getEventSentence() {
        return eventSentence;
    }

    public void setEventSentence(String eventSentence) {
        this.eventSentence = eventSentence;
    }
}
