import BigIndividualCategory from "./BigIndividualCategory";
import React, { useContext, useState, useEffect } from 'react';
import {View} from 'react-native';
import Modal from '../Components/ReusableModal';
import { ModalContext } from '../Context/ModalContext';

export default function BigCategory({ events, user }) {
    const { showModal } = useContext(ModalContext);
    const BigIndividualCategories = events.map((event) => {
        return (
                <BigIndividualCategory on
                    key={event.id}
                    imageUri={event.imageURL}
                    event={event}
                />
        )
    })
    return (
        <>{BigIndividualCategories}
        </>
    )
} 