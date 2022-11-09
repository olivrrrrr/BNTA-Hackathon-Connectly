import SpecialIndividualEvent from "./SpecialIndividualEvent";
import {View} from 'react-native'

export default function SpecialIndividualEvents({ specialEvents, user}) {
    const specialIndivdualEvent = specialEvents.map(event => {
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