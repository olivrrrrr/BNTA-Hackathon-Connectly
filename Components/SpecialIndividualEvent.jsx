import React, { useContext } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Pressable
} from 'react-native';
import { ThemeContext } from '../Context/ThemeContext';
import { ModalContext } from '../Context/ModalContext';
import SpecialModal from './SpecialModal';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SpecialIndividualEvent(props) {
    const { event, imageUri } = props;
    const { toggle } = useContext(ThemeContext);
    const themeStyles = {
        borderColor: toggle ? '#FFFFFF' : '#000000',
        color: toggle ? '#FFFFFF' : '#000000',
    }
    const { showModal, toggleModal } = useContext(ModalContext);

    const currentDate = () => {
        const date = new Date();
        return date.toISOString().split('T')[0];
    }

    return (
        <>
            <Pressable onPress={() => toggleModal(event.id, false, false, true)}>
                <View style={[styles.categoryContainer, themeStyles]}>
                    <View style={{ flex: 2 }}>
                        <Image source={imageUri}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'stretch', borderRadius: 15 }}
                        />
                        <Text style={[themeStyles, styles.categoryText]}>{event.title}</Text>
                    </View>
                </View>
            </Pressable>
            {showModal.show && showModal.specialEvent === true && showModal.modalId === event.id ?
                <SpecialModal
                >
                    <View style={styles.modalTextContainer}>
                        <Text style={styles.modalText}>
                            <Ionicons name="calendar" size={15} color="purple" /> {event.title}
                        </Text>
                        <Text style={styles.modalText}>
                            <Ionicons name="information-circle" size={15} color="purple" /> What is it? {event.description}
                        </Text>
                        <Text style={styles.modalText}>
                            <Ionicons name="time-outline" size={15} color="purple" /> Start Date: {currentDate(event.startDate)}
                        </Text>
                        <Text style={styles.modalText}>
                            <Ionicons name="time-outline" size={15} color="purple" /> End Date: {currentDate(event.endDate)}
                        </Text>
                    </View>
                </SpecialModal> : null}
        </>
    )
}

const styles = StyleSheet.create({
    categoryContainer: {
        height: 150,
        width: 340,
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
