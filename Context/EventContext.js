import React, { createContext, useState, useEffect } from "react";
import { getAllEvents } from '../Adaptors/BackendAdaptor';

export const EventContext = createContext(false);

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [buttonText, setButtonText] = useState(false);

    useEffect(() => {
        getAllEvents().then((json) => {
            setEvents(json.events);
        })
    }, [])

    const removeEvent = (key) => {
        let tempEvents = events;
        let newEvents = tempEvents.slice(0, key).concat(tempEvents.slice(++key, tempEvents.length))
        setEvents(newEvents);
        setButtonText(!buttonText)
    }

    const eventComparison = (event) => {

        if(!events.filter(e => e.title === event.title).length > 0) {
            setEvents(events.concat(event));
            setButtonText(!buttonText)
        } else {
            setButtonText(!buttonText)
        }
    }

    return (
        <EventContext.Provider value={{ events, setEvents, removeEvent, eventComparison, buttonText }}>
            {children}
        </EventContext.Provider>
    )
}