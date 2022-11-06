export const events = [
    {
        id: 1,
        title: "BNTA Social",
        description: "Some events",
        attendees: [1, 2],
        organisers: [1],
        startDate: "2021-12-20T00:00:00.000+00:00",
        endDate: "2022-12-20T00:00:00.000+00:00",
        tags: ["coding"],
        wheelchairAccessible: true,
        cost: 10,
        isDrinking: false,
        imageURL: require('../Images/townhall.jpeg')
    },
    {
        id: 2,
        title: "Football",
        description: "Some events",
        attendees: [1, 2],
        organisers: [2],
        startDate: "2021-12-20T00:00:00.000+00:00",
        endDate: "2022-12-20T00:00:00.000+00:00",
        tags: ["football", "sports"],
        wheelchairAccessible: false,
        cost: 5,
        isDrinking: false,
        imageURL: require('../Images/football.webp')
    }
]