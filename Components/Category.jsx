import IndividualCategory from "./IndividualCategory";

export default function BigCategory({ popularEvents, user }) {
    const IndividualCategories = popularEvents.map(event => {
        return (
            <IndividualCategory on
                key={event.id}
                imageUri={event.imageURL}
                event={event}
            />)
    })
    return (
        <>{IndividualCategories}</>
    )
} 