import IndividualCategory from "./IndividualCategory";

export default function BigCategory({ popularEvents, user }) {
    const IndividualCategories = popularEvents.map((event, index) => {
        return (
            <>
                <IndividualCategory
                    index={index}
                    imageUri={event.imageURL}
                    event={event}
                />
            </>
        )
    })
    return (
        <>{IndividualCategories}</>
    )
} 