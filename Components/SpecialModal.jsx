import React, { useContext } from "react";
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { ModalContext } from '../Context/ModalContext';

export default function SpecialModal(props) {
    let children = props.children;

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