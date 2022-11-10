import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState({
        show: false, 
        modalId: 0, 
        bigEvent: false,
        normalEvent: false,
        specialEvent: false
    });

    const toggleModal = (id, bigEvent, normalEvent, specialEvent) => {
        setShowModal({
            show: !showModal.show, 
            modalId: id, 
            bigEvent: bigEvent,
            normalEvent: normalEvent,
            specialEvent: specialEvent
        });
    }

    return (
        <ModalContext.Provider value={{ showModal, toggleModal }}>
            {children}
        </ModalContext.Provider>
    )
}