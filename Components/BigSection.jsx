import { useContext, useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Pressable,
} from 'react-native';

import { ThemeContext } from '../Context/ThemeContext';
import { getAllUsers, getAllEvents, getEventById, getUserById, postUser, postEvent } from '../Adaptors/BackendAdaptor';
import BigIndividualCategory from './BigIndividualCategory';
import User from '../Classes/User'
import Event from '../Classes/Event'
import BigCategory from './BigCategory';
import { EventContext } from '../Context/EventContext';


export default function BigSection(props) {
    const { title } = props;

    // const [events, setEvents] = useState([])
    const [users, setUsers] = useState([]);
    const { toggle } = useContext(ThemeContext);

    const { events, removeEvent } = useContext(EventContext);

    const themeStyles = {
        backgroundColor: toggle ? '#333' : '#FFFFFF',
        color: toggle ? '#FFFFFF' : '#333',
        borderColor: toggle ? '#FFFFFF' : '#333',
    }

    // const removeEvent = (key) => {
    //     let tempEvents = events;
    //     setEvents(tempEvents.slice(0, key).concat(tempEvents.slice(++key, tempEvents.length)))
    //     console.log(key);
    // }

    // useEffect(() => {
    //     // let newUser = new User('4', 'Luke', 'software engineer', 'luke@lukemail.com', ['coding'], [1]);
    //     // let newEvent = new Event('1', 'Work Social 1', 'Lloyds Townhall', [3], [4], 'start', 'end', ['coding'], true, 5, false);

    //     // postUser(newUser)
    //     //     .then(() => {
    //     //         getAllUsers().then((json) => {
    //     //             setUsers(json.users);
    //     //         })
    //     //     })

    //     // postEvent(newEvent)
    //     //     .then(() => {
    //     //         getAllEvents().then((json) => {
    //     //             setEvents(json.events);
    //     //         })
    //     //     })

    //     getAllEvents().then((json) => {
    //         setEvents(json.events);
    //     })
    //     // getAllUsers().then((json) => {
    //     //     setUsers(json.users);
    //     // })
    // }, [])

    return (events.length !== 0) ? (
        <View style={[themeStyles, styles.sectionContainer]}>
            <Text
                style={[themeStyles, styles.sectionTitle]}>
                {title}
            </Text>
            <View style={{ height: 170 }}>
                <ScrollView
                    horizontal={true}
                    decelerationRate={0}
                    snapToInterval={200} //your element width
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                >

                    <BigCategory user={users} events={events} handleDecline={removeEvent}/>
                    {/* <BigIndividualCategory
                        imageUri={require('../Images/townhall.jpeg')}
                        users={users}
                        event={events[0]}
                    />
                    <BigIndividualCategory
                        imageUri={require('../Images/football.webp')}
                        users={users}
                        event={events[1]}
                    /> */}
                </ScrollView>

            </View>
        </View>
    ) :
        (
            <View style={styles.sectionContainer}>
                <Text
                    style={[themeStyles, styles.sectionTitle]}>
                    {title}
                </Text>
                <Text style={styles.noEventSection}>You are attending no events!</Text>
            </View>
        );
}

const styles = StyleSheet.create({
    sectionContainer: {
        padding: 24
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        paddingBottom: 10,
    },
    sectionDescription: {
        fontSize: 18,
        fontWeight: '400',
    },
    noEventSection: {
        padding: 25,
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center'
    }

});