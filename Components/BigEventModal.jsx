import React, { useContext } from "react";
import { View, Text, Modal, Button, TouchableOpacity } from 'react-native';
import { ModalContext } from '../Context/ModalContext';

export default function SpecialModal(props) {
    let children = props.children;
    let onDecline = props.onDecline;
    const { containerStyle, textStyle, sectionStyle } = styles;
    const { toggleModal } = useContext(ModalContext);
    return (
        <Modal
            transparent={true}
            animationType="fade"
            onRequestClose={() => { }}
        >
            <TouchableOpacity
                style={containerStyle}
                onPress={() => toggleModal()}
                activeOpacity={1}
            >
                <View>

                    <View style={sectionStyle}>
                        <Text style={textStyle}>
                            {children}
                        </Text>
                        <Text style={textStyle}>You are currently attending this event. To change your mind please press remove!</Text>
                        <Button onPress={onDecline} title="Remove" />
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}

const styles = {
    sectionStyle: {
        margin: 40,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#ffffff'
    },
    textStyle: {
        fontSize: 18,
        textAlign: 'center',
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        justifyContent: 'center',
        flex: 1,
    },
};