import React, { useContext } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';
import { ThemeContext } from '../Context/ThemeContext';

export default function SpecialIndividualEvent(props) {
    const {event, imageUri} = props;
    const { toggle } = useContext(ThemeContext);
    const themeStyles = {
        borderColor: toggle ? '#FFFFFF' : '#000000',
        color: toggle ? '#FFFFFF' : '#000000',
    }

    console.log(event.id)
    return (
        <View style={[styles.categoryContainer, themeStyles]}>
            <View style={{ flex: 2 }}>
            <Image source={imageUri}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'stretch', borderRadius: 15}}
                />
                <Text style={[themeStyles, styles.categoryText]}>{event.title}</Text>
            </View>
        </View>
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
        top:100,
        fontWeight: 'bold',
    }
});
