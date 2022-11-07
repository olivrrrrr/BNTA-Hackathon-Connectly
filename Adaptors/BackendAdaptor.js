
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

const getPopularEvents = () => {
    return(
        fetch("api/v1/popularEvents")
        .then(res => res.json())
    )
}

const getAllSpecialEvents = () => {
    return(
        fetch("api/v1/specialEvents")
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

const postUser = (user) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }

    return(fetch('api/v1/users', requestOptions)
    .then(res => res.json()))
}

const postEvent = (event) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(event)
    }

    return(fetch('api/v1/events', requestOptions)
    .then(res => res.json()))
}

export {getAllUsers, getAllEvents, getEventById, getUserById, postUser, postEvent, getAllSpecialEvents, getPopularEvents}