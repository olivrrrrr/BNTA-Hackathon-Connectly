import React from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';

export default function IndividualCategory (props) {
    const {event, imageUri} = props;
    return (
        <View style={{ height: 130, width: 130, borderWidth: 0.5, marginLeft: 10, borderColor: 'white'}}>
            <View style={{ flex: 2 }}>
                <Image source={imageUri}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                />
            </View>
            <View style={{ flex: 1, paddingLeft: 10 }}>
                <Text>{event.title}</Text>
            </View>
        </View>
    )
}
