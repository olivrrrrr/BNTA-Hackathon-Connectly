import { useContext } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

import { ThemeContext } from '../Context/ThemeContext';

export default function Section({ title, description }) {

    const { toggle } = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor: toggle ? '#333' : '#CCC',
        color: toggle ? '#CCC' : '#333',
        borderColor: toggle ? '#CCC' : '#333',
    }

    return (
        <View style={[themeStyles, styles.sectionContainer]}>
            <Text
                style={[themeStyles, styles.sectionTitle]}>
                {title}
            </Text>
            <Text
                style={[themeStyles, styles.sectionDescription]}>
                {description}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        padding: 24,
        borderWidth: 1,
        margin: 10,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    }
});