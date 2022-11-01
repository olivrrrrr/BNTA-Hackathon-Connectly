import { useContext, useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
} from 'react-native';

import { ThemeContext } from '../Context/ThemeContext';
import { getAllUsers, getAllEvents, getEventById, getUserById, postUser, postEvent } from '../Adaptors/BackendAdaptor';
import IndividualCategory from './IndividualCategory';
import User from '../Classes/User'
import Event from '../Classes/Event'


export default function Section(props) {
    const { title, description } = props;

    const [users, setUsers] = useState([]);
    const [events, setEvents] = useState([]);
    const { toggle } = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor: toggle ? '#333' : '#CCC',
        color: toggle ? '#CCC' : '#333',
        borderColor: toggle ? '#CCC' : '#333',
    }

    useEffect(() => {
        let newUser = new User('4', 'Luke', 'software engineer', 'luke@lukemail.com', ['coding'], [1]);
        let newEvent = new Event('1','Work Social 1','Lloyds Townhall', [3], [4], 'start', 'end', ['coding'], true, 5, false);
        
        // postUser(newUser)
        //     .then(() => {
        //         getAllUsers().then((json) => {
        //             setUsers(json.users);
        //         })
        //     })

        // postEvent(newEvent)
        //     .then(() => {
        //         getAllEvents().then((json) => {
        //             setEvents(json.events);
        //         })
        //     })

        getAllEvents().then((json) => {
            setEvents(json.events);
        })
        getAllUsers().then((json) => {
            setUsers(json.users);
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
            <View style={{ height: 130, marginTop: 10 }}>
                <ScrollView horizontal={true}>
                    <IndividualCategory
                        imageUri={require('../Images/townhall.jpeg')}
                        users={users}
                        event={events[0]}
                    />
                    <IndividualCategory
                        imageUri={require('../Images/football.webp')}
                        users={users}
                        event={events[1]}
                    />
                </ScrollView>

            </View>
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
        marginTop: 6,
        fontSize: 18,
        fontWeight: '400',
    }
});