import React, { createContext, useState, useEffect } from "react";
import { getAllUsers, getAllEvents, getEventById, getUserById, postUser, postEvent } from '../Adaptors/BackendAdaptor';

export const EventContext = createContext(false);

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [buttonText, setButtonText] = useState('Would you like to attend?');

    useEffect(() => {
        getAllEvents().then((json) => {
            setEvents(json.events);
        })
    }, [])

    const removeEvent = (key) => {
        let tempEvents = events;
        setEvents(tempEvents.slice(0, key).concat(tempEvents.slice(++key, tempEvents.length)))
        console.log(key);
    }

    const handleOnAccept = (event) => {
        !eventComparison ? setEvents(events.concat(event)) : setButtonText('you are already attending');
    }

    const eventComparison = (event) => {
        return events.filter(e => e.title === event.title)
    }

    return (
        <EventContext.Provider value={{ events, handleOnAccept, removeEvent, buttonText, eventComparison }}>
            {children}
        </EventContext.Provider>
    )
}