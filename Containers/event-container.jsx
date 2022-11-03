import { View, Text, TouchableOpacity } from 'react-native';

export default function EventContainer({ navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Modal')}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24 }}>Press Me to create an Event</Text>
        </TouchableOpacity>
    )
}