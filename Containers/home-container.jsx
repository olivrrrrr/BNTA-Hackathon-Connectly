import React, { useContext, useState, useEffect } from 'react';

import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';

import SliderToggle from '../Components/SliderToggle';
import { ThemeContext } from '../Context/ThemeContext';
import BigSection from '../Components/BigSection';
import Section from '../Components/Section';
import SpecialSection from '../Components/SpecialSection';
import Modal from '../Components/ReusableModal';
import { ModalContext } from '../Context/ModalContext';
import { getAllUsers, getAllEvents, getEventById, getUserById, postUser, postEvent, getAllSpecialEvents } from '../Adaptors/BackendAdaptor';

export default function HomeContainer({ navigation }) {
    const { toggle } = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor: toggle ? '#333' : '#FFFFFF',
        color: toggle ? '#CCC' : '#333',
    }

    return (
        <SafeAreaView style={[styles.appContainer, themeStyles]}>
            <ScrollView>
                <SliderToggle />
                <BigSection title={'Your Events'} />
                <Section title={'Popular Events'} />
                <SpecialSection title={'Psst! Remember to consider'} />
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    appContainer: {
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 6,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});