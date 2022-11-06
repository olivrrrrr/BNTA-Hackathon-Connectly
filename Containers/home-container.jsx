import React, { useContext } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';

import SliderToggle from '../Components/SliderToggle';
import { ThemeContext } from '../Context/ThemeContext';
import BigSection from '../Components/BigSection';
import Section from '../Components/Section';
import SpecialSection from '../Components/SpecialEventsList';

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
                <BigSection/>
                <View>
                    <Section
                        title={'My Interests'}
                    />
                    <SpecialSection title={'Special Events'}/>
                </View>
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