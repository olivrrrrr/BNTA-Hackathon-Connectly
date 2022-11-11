import BigIndividualCategory from "./BigIndividualCategory";
import React from 'react';

export default function BigCategory({ events, handleDecline }) {
    const BigIndividualCategories = events.map((event, index) => {
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