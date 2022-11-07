import SpecialIndividualEvent from "./SpecialIndividualEvent";
import {View} from 'react-native'

export default function SpecialIndividualEvents({ events, user}) {
    console.log(events)
    const specialIndivdualEvent = events.map(event => {
        return (
            <SpecialIndividualEvent
                key = {event.id}
                imageUri={event.imageURL}
                event={event}
                />)
    })
    return(
        <>{specialIndivdualEvent}</>
    )
} 