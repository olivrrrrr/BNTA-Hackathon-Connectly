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

export default function IndividualCategory(props) {
    const { event } = props;
    const { toggle } = useContext(ThemeContext);
    const themeStyles = {
        borderColor: toggle ? '#FFFFFF' : '#000000',
        color: toggle ? '#FFFFFF' : '#000000',
    }
    const { showModal, toggleModal } = useContext(ModalContext);
    return (
        <>
            <Pressable onPress={() => toggleModal(event.id, false, true, false)}>
                <View style={[styles.categoryContainer, themeStyles]}>
                    <View style={{ flex: 2 }}>
                        <Image source={event.imageURL}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'stretch', borderRadius: 15 }}
                        />
                        <Text style={[themeStyles, styles.categoryText]}>{event.title}</Text>
                    </View>
                </View>
            </Pressable>
            {showModal.show && showModal.normalEvent === true && showModal.modalId === event.id ?
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
                            <Ionicons name="time-outline" size={15} color="purple" /> Starting at: {event.startDate}
                        </Text>
                        <Text style={styles.modalText}>
                            <Ionicons name="time-outline" size={15} color="purple" /> Ending at: {event.endDate}
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
        height: 130,
        width: 130,
        marginRight: 10,
        borderRadius: 15
    },
    categoryText: {
        paddingLeft: 10,
        position: 'absolute',
        top: 100,
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
