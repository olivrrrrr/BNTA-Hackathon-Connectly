import { View, Text } from 'react-native';
import SliderToggle from '../Components/SliderToggle';

export default function OthersContainer({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>
                    To Change Theme
                    <SliderToggle />
                </Text>
        </View>
    )
}