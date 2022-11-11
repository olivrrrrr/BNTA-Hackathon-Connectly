import { TextInput, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NewEventContext } from '../../Context/NewEventContext';
import { useContext } from 'react';

export default function EventDescriptionScreen({ navigation }) {

    const { setDescription } = useContext(NewEventContext)

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <TextInput
                style={styles.input}
                // value={text}
                placeholder="Add event name"
                onChangeText={newText => setDescription(newText)}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'flex-start' 
    },
    input: {
        height: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})