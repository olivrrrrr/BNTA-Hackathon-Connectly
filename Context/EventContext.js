import React, { createContext, useState, useEffect } from "react";
import { getAllUsers, getAllEvents, getEventById, getUserById, postUser, postEvent } from '../Adaptors/BackendAdaptor';

export const EventContext = createContext(false);

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);

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
        setEvents(events.concat(event));
    }

    return (
        <EventContext.Provider value={{ events, setEvents, handleOnAccept, removeEvent }}>
            {children}
        </EventContext.Provider>
    )
}