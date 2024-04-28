import { 
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
    StyleSheet,
    Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { createStackNavigator } from "@react-navigation/stack";
import EventNameScreen from '../Components/CreateEvent/EventNameScreen';
import CreateEventScreen from '../Components/CreateEvent/CreateEventScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function EventContainer({navigation}) {
    
    return(
        // <View style={{flex:1}}/>

        <TouchableOpacity onPress={() => navigation.navigate('New Event')}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24 }}>Press Me to create an Event</Text>
        </TouchableOpacity>
        // <TouchableOpacity onPress={() => navigation.navigate('Modal')}

        //     style={styles.touchableOpacity} />
        // <SafeAreaProvider>
        //     <CreateEventStack.Navigator>
        //         <CreateEventStack.Screen 
        //             name="CreateEventScreen"
        //             component={CreateEventScreen}
        //             options={{
        //                 headerTitle:'Create New Event'
        //             }}
        //             // options={{title: "Create Event"}}
        //         />
        //         <CreateEventStack.Screen
        //             name="EventNameScreen"
        //             component={EventNameScreen}
        //             options={{
        //                 title: "Event Name",
        //                 headerRight: () => (
        //                     <Button
        //                     onPress={() => alert('This is a button!')}
        //                     title="Save"
        //                     color="#fff"
        //                     />)
        //                 }}
        //             screenOptions={{ headerShown: false }}

        //             />
        //     </CreateEventStack.Navigator>
        // </SafeAreaProvider>
    )
}
//     return (
        
//             // <TouchableOpacity onPress={() => navigation.navigate('Modal')}
//                 // style={styles.touchableOpacity}>
//                 <ScrollView style={styles.scrollView}>
//                     <CreateEventOptions title='Create Event' />
//                     {/* <FlatList /> */}
//                         {/* <Text style={styles.text}>Create Event</Text>
//                         <TextInput
//                             style={{
//                             height: 40,
//                             borderColor: 'gray',
//                             borderWidth: 1
//                             }}
//                         /> */}
//                 </ScrollView> 
//     )
// }

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