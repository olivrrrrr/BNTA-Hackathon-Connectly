import React, { createContext, useState } from "react";

export const EventContext = createContext(false);

export const EventProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);

    const toggleEvent = () => {
        setToggle(!toggle);
    }

    return (
        <EventContext.Provider value={{ toggle, toggleEvent }}>
            {children}
        </EventContext.Provider>
    )
}