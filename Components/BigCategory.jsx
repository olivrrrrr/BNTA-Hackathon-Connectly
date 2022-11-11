import BigIndividualCategory from "./BigIndividualCategory";
import React, { useContext, useState, useEffect } from 'react';
import {View} from 'react-native';
import Modal from './popularEventModal';
import { ModalContext } from '../Context/ModalContext';

export default function BigCategory({ events, user, handleDecline }) {
    const { showModal } = useContext(ModalContext);
    console.log(events)
    const BigIndividualCategories = events.map((event, index) => {
        console.log("event"+event)
        return (
                <BigIndividualCategory on
                    index={index}
                    imageUri={event.imageURL}
                    event={event}
                    handleDecline={handleDecline}
                />
        )
    })
    return (
        <>
        {BigIndividualCategories}
        </>
    )
} 