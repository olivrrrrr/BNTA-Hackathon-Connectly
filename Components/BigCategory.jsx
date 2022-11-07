import BigIndividualCategory from "./BigIndividualCategory";
import {View} from 'react-native'

export default function BigCategory({ events, user}) {
    const BigIndividualCategories = events.map(event => {
        return (
            <BigIndividualCategory on
                key = {event.id}
                imageUri={event.imageURL}
                event={event}
                />)
    })
    return(
        <>{BigIndividualCategories}</>
    )
} 