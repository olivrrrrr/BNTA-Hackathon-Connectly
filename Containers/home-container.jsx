import React, { useContext } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from 'react-native';

import SliderToggle from '../Components/SliderToggle';
import { ThemeContext } from '../Context/ThemeContext';
import BigSection from '../Components/BigSection';
import Section from '../Components/Section';
import SpecialSection from '../Components/SpecialSection';

export default function HomeContainer({ navigation }) {
    const { toggle } = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor: toggle ? '#333' : '#FFFFFF',
        color: toggle ? '#CCC' : '#333',
    }

    return (
        <SafeAreaView style={[styles.appContainer, themeStyles]}>
            <ScrollView>
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