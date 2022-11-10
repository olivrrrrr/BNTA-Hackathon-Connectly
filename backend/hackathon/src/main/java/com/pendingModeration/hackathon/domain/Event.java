package com.pendingModeration.hackathon.domain;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;


@Document("events")
public class Event {

    @Id
    private String id;

    private String title;

    private String description;

    private List<String> attendees;

    private  List<String> organisers;

    private Instant startDate;

    private Instant endDate;

    private BigDecimal cost;

    private String imageURL;

    private String location;

    private boolean wheelchairAcessible;

    private boolean isDrinking;

    private boolean isFamilyFriendly;

    public Event(String id, String title, String description, List<String> attendees, List<String> organisers, Instant startDate, Instant endDate, BigDecimal cost, String imageURL, String location, boolean wheelchairAcessible, boolean isDrinking, boolean isFamilyFriendly) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.attendees = attendees;
        this.organisers = organisers;
        this.startDate = startDate;
        this.endDate = endDate;
        this.cost = cost;
        this.imageURL = imageURL;
        this.location = location;
        this.wheelchairAcessible = wheelchairAcessible;
        this.isDrinking = isDrinking;
        this.isFamilyFriendly = isFamilyFriendly;
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

    public List<String> getAttendees() {
        return attendees;
    }

    public void setAttendees(List<String> attendees) {
        this.attendees = attendees;
    }

    public List<String> getOrganisers() {
        return organisers;
    }

    public void setOrganisers(List<String> organisers) {
        this.organisers = organisers;
    }

    public BigDecimal getCost() {
        return cost;
    }

    public void setCost(BigDecimal cost) {
        this.cost = cost;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public boolean isWheelchairAcessible() {
        return wheelchairAcessible;
    }

    public void setWheelchairAcessible(boolean wheelchairAcessible) {
        this.wheelchairAcessible = wheelchairAcessible;
    }

    public boolean isDrinking() {
        return isDrinking;
    }

    public void setDrinking(boolean drinking) {
        isDrinking = drinking;
    }

    public boolean isFamilyFriendly() {
        return isFamilyFriendly;
    }

    public void setFamilyFriendly(boolean familyFriendly) {
        isFamilyFriendly = familyFriendly;
    }
}
