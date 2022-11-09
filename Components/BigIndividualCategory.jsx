import React, { useContext } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Pressable,
} from 'react-native';
import { ThemeContext } from '../Context/ThemeContext';
import { ModalContext } from '../Context/ModalContext';
import Modal from '../Components/ReusableModal';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BigIndividualCategory(props) {
    const { event } = props;
    const { toggle } = useContext(ThemeContext);
    const themeStyles = {
        borderColor: toggle ? '#FFFFFF' : '#000000',
        color: toggle ? '#FFFFFF' : '#000000',
    }
    const { toggleModal } = useContext(ModalContext);
    const { showModal } = useContext(ModalContext);

    const currentDate = () => {
        const date = new Date();
        return date.toISOString().split('T')[0];
    }

    return (
        <>
            <Pressable onPress={() => toggleModal(event.id, true, false, false)}>
                <View style={[styles.categoryContainer, themeStyles]}>
                    <View style={{ flex: 2 }}>
                        <Image source={event.imageURL}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'stretch', borderRadius: 15 }}
                        />
                        <Text style={[themeStyles, styles.categoryText]}>{event.title}</Text>
                    </View>
                </View>
            </Pressable>
            {showModal.bigEvent === true && showModal.show && showModal.modalId === event.id ?
                <Modal
                >
                    <View style={styles.modalTextContainer}>
                        <Text style={styles.modalText}>
                            <Ionicons name="calendar-outline" size={15} color="purple" /> Event: {event.title}
                        </Text>
                        <Text style={styles.modalText}>
                            <Ionicons name="information-circle-outline" size={15} color="purple" /> Details: {event.description}
                        </Text>
                        <Text style={styles.modalText}>
                            <Ionicons name="people-outline" size={15} color="purple" /> Number of people attending: {event.attendees}
                        </Text>
                        <Text style={styles.modalText}>
                            <Ionicons name="time-outline" size={15} color="purple" /> Date: {currentDate(event.startDate)}
                        </Text>
                        <Text style={styles.modalText}>
                            <Ionicons name="time-outline" size={15} color="purple" /> Duration:
                        </Text>
                        <Text style={styles.modalText}>
                            <Ionicons name="help" size={15} color="purple" /> Is this event wheelchair accessible? {event.wheelchairAccessible ? "Yes" : "No"}
                        </Text>
                        <Text style={styles.modalText}>
                            <Ionicons name="pricetag-outline" size={15} color="purple" /> Price: £{event.cost}
                        </Text>
                        <Text style={styles.modalText}>
                            <Ionicons name="location-outline" size={15} color="purple" /> Location to meet: {event.location}
                        </Text>
                        <Text style={styles.modalText}>
                            Will drinking be involved?
                        </Text>
                    </View>
                </Modal> : null}
        </>

    )
}

const styles = StyleSheet.create({
    categoryContainer: {
        height: 170,
        width: 170,
        marginRight: 10,
        borderRadius: 15
    },
    categoryText: {
        paddingLeft: 10,
        position: 'absolute',
        bottom: 20,
        fontWeight: 'bold',
    },
    modalTextContainer: {
        paddingBottom: 10,
    },
    modalText: {
        paddingBottom: 10,
        fontSize: 18
    }

});