import { useContext, useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
} from 'react-native';

import { ThemeContext } from '../Context/ThemeContext';
import { getAllUsers, getAllEvents, getEventById, getUserById, postUser, postEvent } from '../Adaptors/BackendAdaptor';
import User from '../Classes/User'
import Event from '../Classes/Event'
import SpecialIndividualEvent from './SpecialIndividualEvent';


export default function Section(props) {
    const { title, description } = props;

    const [users, setUsers] = useState([]);
    const [events, setEvents] = useState([]);
    const { toggle } = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor: toggle ? '#333' : '#FFFFFF',
        color: toggle ? '#FFFFFF' : '#333',
        borderColor: toggle ? '#FFFFFF' : '#333',
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
            <View style={{ height: 150, marginTop: 10 }}>
                <ScrollView horizontal={true}>
                    <SpecialIndividualEvent
                        imageUri={require('../Images/townhall.jpeg')}
                        users={users}
                        event={events[0]}
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
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        fontSize: 18,
        fontWeight: '400',
    }
});