import IndividualCategory from "./IndividualCategory";

export default function BigCategory({ events, user}) {
    const IndividualCategories = events.map(event => {
        return (
            <IndividualCategory on
                key = {event.id}
                imageUri={event.imageURL}
                event={event}
                />)
    })
    return(
        <>{IndividualCategories}</>
    )
} 