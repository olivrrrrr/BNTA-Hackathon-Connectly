import { 
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
    StyleSheet } from 'react-native';
import CreateEventHeader from '../Components/CreateEventHeader';
import { ScrollView } from 'react-native-gesture-handler';

export default function EventContainer({ navigation }) {
    return (
        // <TouchableOpacity onPress={() => navigation.navigate('Modal')}
            // style={styles.touchableOpacity}>
            <ScrollView style={styles.scrollView}>
                <CreateEventHeader title='Create Event' />
                <FlatList />
                    {/* <Text style={styles.text}>Create Event</Text>
                    <TextInput
                        style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1
                        }}
                    /> */}
            </ScrollView>
        // </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchableOpacity: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        backgroundColor: "red",
        flex: 1,
        paddingTop: 60
    },
    text: {
        flexDirection: "row",
        backgroundColor: "red",
    },
})