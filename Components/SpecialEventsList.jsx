import { useContext, useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
} from 'react-native';

import { ThemeContext } from '../Context/ThemeContext';
import { getAllUsers, getAllSpecialEvents } from '../Adaptors/BackendAdaptor';
import SpecialIndividualEvents from './SpecialIndividualEvents';


export default function Section(props) {
    const { title } = props;

    const [users, setUsers] = useState([]);
    const [specialEvents, setSpecialEvents] = useState([]);
    const { toggle } = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor: toggle ? '#333' : '#FFFFFF',
        color: toggle ? '#FFFFFF' : '#333',
        borderColor: toggle ? '#FFFFFF' : '#333',
    }

    useEffect(() => {

        getAllSpecialEvents().then((json) => {
            setSpecialEvents(json.specialEvents);
        })
        getAllUsers().then((json) => {
            setUsers(json.users);
        })
    }, [])

    return (users.length !== 0 && specialEvents.length !== 0) ? (
        <View style={[themeStyles, styles.sectionContainer]}>
            <Text
                style={[themeStyles, styles.sectionTitle]}>
                {title}
            </Text>
            <View style={{ height: 150, marginTop: 10 }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <SpecialIndividualEvents specialEvents={specialEvents} user={users} />
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