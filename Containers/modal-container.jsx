import { View, Text } from 'react-native';

export default function ModalContainer({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text 
                style={{ fontSize: 26, fontWeight: 'bold' }}>I am a modal</Text>
        </View>
    )
}