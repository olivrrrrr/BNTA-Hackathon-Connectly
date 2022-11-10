import { View, Text } from 'react-native';
import SliderToggle from '../Components/SliderToggle';

export default function OthersContainer({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text
                style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>
                To Change Theme
            </Text>
            <SliderToggle />
        </View>
    )
}