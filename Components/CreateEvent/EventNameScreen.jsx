import { TextInput, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EventNameScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Button
                title="Save"
                onPress={() => navigation.goBack()}
                accessibilityLabel="Save event name"
                style={styles.saveButton}/>
            <TextInput
                style={styles.input}
                // value={text}
                placeholder="Add event name"
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
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    saveButton: {
        backgroundColor: 'red',
        flexDirection: 'flex-end'
    }
})