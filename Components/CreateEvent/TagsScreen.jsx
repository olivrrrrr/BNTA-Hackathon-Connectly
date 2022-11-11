import { useState } from "react";
import { TextInput, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const tags = [
    'tech', 'women', 'religious', 'mental health', 'wellbeing'
]

export default function TagsScreen({ navigation }) {

    const [search, setSearch] = useState('')
    
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <TextInput
                style={styles.input}
                // value={text}
                placeholder="Search tags"
                placeholderTextColor='gray'
                onChangeText={(input) => {setSearch(input)}}
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