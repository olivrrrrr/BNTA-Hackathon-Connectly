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
                    Title of Event: {event.title} {"\n"}
                    Description: {event.description} {"\n"}
                    Number of people attending: {event.attendees} {"\n"}
                    Starting at: {event.startDate} and ending at: {event.endDate} {"\n"}
                    Does this event include accessibility? {"\n"}
                    Price: £{event.cost} {"\n"}
                    Location to meet: {event.location} {"\n"}
                    Will drinking be involved? {"\n"}
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
        top:100,
        fontWeight: 'bold',
    }
});
