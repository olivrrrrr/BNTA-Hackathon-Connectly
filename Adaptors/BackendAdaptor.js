
const getAllUsers = () => {
    return(
        fetch("api/v1/users")
        .then(res => res.json())
    )
}

const getAllEvents = () => {
    return(
        fetch("api/v1/events")
        .then(res => res.json())
    )
}

const getEventById = (id) => {
    return(
        fetch(`api/v1/events/${id}`)
        .then(res => res.json())
    )
}

const getUserById = (id) => {
    return(
        fetch(`api/v1/users/${id}`)
        .then(res => res.json())
    )
}


export {getAllUsers, getAllEvents, getEventById, getUserById}