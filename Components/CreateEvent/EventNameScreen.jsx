import { TextInput, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NewEventContext } from '../../Context/NewEventContext';
import { useContext } from 'react';

export default function EventNameScreen({ navigation }) {
    // const [title, setTitle] = useState('') 
    const { setTitle } = useContext(NewEventContext)
    
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <TextInput
                style={styles.input}
                // value={text}
                placeholder="Add event name"
                onChangeText={newTitle => setTitle(newTitle)}
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
    }
})