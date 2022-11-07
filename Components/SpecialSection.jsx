import { useContext, useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
} from 'react-native';

import { ThemeContext } from '../Context/ThemeContext';
import { getAllUsers, getAllSpecialEvents, getEventById, getUserById, postUser, postEvent } from '../Adaptors/BackendAdaptor';
import User from '../Classes/User'
import Event from '../Classes/Event'
import SpecialIndividualEvent from './SpecialIndividualEvent';
import SpecialIndividualEvents from './SpecialIndividualEvents';


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

        getAllSpecialEvents().then((json) => {
            setEvents(json.specialEvents);
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
                    <SpecialIndividualEvents events={events} user={users}/>
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