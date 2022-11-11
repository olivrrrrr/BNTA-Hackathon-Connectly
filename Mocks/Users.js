export const users =
    [{
        id: 1,
        name: "Lloyd martin",
        jobTitle: "Security",
        email: "lloydmartin@hotmail.com",
        tags: ["coding", "drinking"],
        events: [{
            id: 1,
            title: "BNTA Social",
            description: "Some events",
            attendees: [1, 2],
            organisers: [1],
            startDate: "2022-11-06T00:00:00.000+00:00",
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
            startDate: "2022-11-08T00:00:00.000+00:00",
            endDate: "2022-12-20T00:00:00.000+00:00",
            tags: ["football"],
            wheelchairAccessible: false,
            cost: 5,
            isDrinking: false,
            imageURL: require('../Images/football.png')
        }
        ]
    },
    {
        id: 2,
        name: "Floyd Tartin",
        jobTitle: "Chief Enterprise Architect",
        email: "Flloydmartin@hotmail.com",
        tags: ["coding", "football"],
        events: [{
            id: 2,
            title: "Football",
            description: "Some events",
            attendees: [1, 2],
            organisers: [2],
            startDate: "2022-11-06T00:00:00.000+00:00",
            endDate: "2022-12-20T00:00:00.000+00:00",
            tags: ["football"],
            wheelchairAccessible: false,
            cost: 5,
            isDrinking: false,
            imageURL: require('../Images/football.png')
        }]
    },
    {
        id: 3,
        name: "Tom Tall",
        jobTitle: "Software Engineer",
        email: "TomTall@hotmail.com",
        tags: [],
        events: []
    }
    ]