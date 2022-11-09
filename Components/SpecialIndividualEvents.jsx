import SpecialIndividualEvent from "./SpecialIndividualEvent";

export default function SpecialIndividualEvents({ specialEvents, user }) {
    const specialIndivdualEvent = specialEvents.map(event => {
        return (
            <SpecialIndividualEvent
                key={event.id}
                imageUri={event.imageURL}
                event={event}
            />)
    })
    return (
        <>{specialIndivdualEvent}</>
    )
} 