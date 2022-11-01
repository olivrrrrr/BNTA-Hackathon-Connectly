import { useContext, useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

import { ThemeContext } from '../Context/ThemeContext';
import { getAllUsers, getAllEvents, getEventById, getUserById, postUser, postEvent } from '../Adaptors/BackendAdaptor';
import User from '../Classes/User'
import Event from '../Classes/Event'


export default function Section({ title, description }) {

    const [users, setUsers] = useState([])
    const [events, setEvents] = useState([])
    const { toggle } = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor: toggle ? '#333' : '#CCC',
        color: toggle ? '#CCC' : '#333',
        borderColor: toggle ? '#CCC' : '#333',
    }

    useEffect(() => {
        let newUser = new User('4', 'Luke', 'software engineer', 'luke@lukemail.com', ['coding'], [1]);
        let newEvent = new Event('3','hi','hi', [3], [4], 'start', 'end', ['coding'], true, 5, false)
        postUser(newUser)
            .then(() => {
                getAllUsers().then((json) => {
                    setUsers(json.users);
                    console.log(users)
                })
            })

        postEvent(newEvent)
            .then(() => {
                getEventById(3).then((json) => {
                    setEvents(json.events);
                    console.log(events);
                })
            })
    }, [])

    return (users.length !== 0 && events.length !== 0) ? (
        <View style={[themeStyles, styles.sectionContainer]}>
            <Text
                style={[themeStyles, styles.sectionTitle]}>
                {title}
            </Text>
            <Text
                style={[themeStyles, styles.sectionDescription]}>
                {description}
            </Text>
            <Text>{users[3].email}, {events.id}</Text>
        </View>
    ) :
        (
            <Text>Loading..</Text>
        );
}

const styles = StyleSheet.create({
    sectionContainer: {
        padding: 24,
        borderWidth: 1,
        margin: 10,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    }
});