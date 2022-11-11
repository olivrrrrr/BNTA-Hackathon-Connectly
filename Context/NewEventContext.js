import React, { createContext, useState } from "react";
import { getAllUsers, getAllEvents, getEventById, getUserById, postUser, postEvent } from '../Adaptors/BackendAdaptor';
import { useContext } from 'react';
import { EventContext } from "./EventContext";

export const NewEventContext = createContext(false);

export const NewEventProvider = ({ children }) => {
    
    const { events, setEvents } = useContext(EventContext)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('') 
    const [location, setLocation] = useState('')
    const [date, setDate] = useState(new Date(1598051730000));
    const [endDate, setEndDate] = useState(new Date(1598051730000));
    const [tags, setTags] = useState('')
    const [photo, setPhoto] = useState(null)
 
    const removeEvent = (key) => {
        let tempEvents = events;
        setEvents(tempEvents.slice(0, key).concat(tempEvents.slice(++key, tempEvents.length)))
        console.log(key);
    }

    const handleOnAccept = () => {
        const newEvent = {
            title: title,
            description: description,
            location: location,
            startDate: date,
            endDate: endDate,
            tags: tags,
            imageURL: require('../Images/football.webp')
            // imageURL: photo
        }
        setEvents(events.push(newEvent));
        console.log('handle on accept', newEvent)
    }

    const printEvent = () => {
        console.log(events)
    }

    return (
        <NewEventContext.Provider value={{ handleOnAccept, removeEvent,
                                        title, setTitle,
                                        description, setDescription,
                                        location, setLocation,
                                        date, setDate,
                                        endDate, setEndDate,
                                        tags, setTags,
                                        photo, setPhoto,
                                        printEvent
                                        }}>
            {children}
        </NewEventContext.Provider>
    )
}