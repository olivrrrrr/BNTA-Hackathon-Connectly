import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import EventContainer from '../Containers/event-container';
import ModalStack from "./ModalStack";
import EventNameScreen from "../Components/CreateEvent/EventNameScreen";
import EventDescriptionScreen from "../Components/CreateEvent/EventDescriptionScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, Modal, View, Button, Image } from "react-native";
import CreateEventScreen from "../Components/CreateEvent/CreateEventScreen";
import LocationScreen from "../Components/CreateEvent/LocationScreen";
import TimeScreen from "../Components/CreateEvent/TimeScreen"
import TagsScreen from "../Components/CreateEvent/TagsScreen"
import ImageScreen from "../Components/CreateEvent/ImageScreen"
import Icon from "react-native-vector-icons/AntDesign";

const Stack = createStackNavigator();

export default function EventStack() {
    return (
        // <ModalContainer/>
        <Stack.Navigator>
            <Stack.Screen name="Create" component={EventContainer} 
            options={{
                headerMode: 'none'
            }}/>

            <Stack.Screen name="New Event" component={CreateEventScreen} 
            options={{
                animationType: 'slide',
                presentation: 'transparent',
                cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
                headerLeft: ({navigation}) => (<Icon name='close' onPress={() => {}}/>),
                headerRight: () => <Button title='Add'/>
                }} /> 

            <Stack.Screen name='Event name' component={EventNameScreen}
            options={({navigation}) => ({
                headerTitle: () => <Text>Event Name</Text>,
                // headerRight: () => <Button title="Save" onPress={() => navigation.navigate('Event description')} />,
                headerRight: () => <Button
                                    title="Save"
                                    onPress={() => navigation.goBack()}
                                    accessibilityLabel="Save event name" />,
                                    // style={styles.saveButton}/>,
                headerLeft: () => <Button title="Cancel" onPress={() => navigation.goBack()} />,
              })}
            />

            <Stack.Screen
                name='Event description'
                component={EventDescriptionScreen}
                options={({navigation}) => ({
                    headerTitle: () => <Text>Event Name</Text>,
                    // headerRight: () => <Button title="Save" onPress={() => navigation.navigate('Event description')} />,
                    headerRight: () => <Button
                                        title="Save"
                                        onPress={() => navigation.goBack()}
                                        accessibilityLabel="Save event name" />,
                                        // style={styles.saveButton}/>,
                    headerLeft: () => <Button title="Cancel" onPress={() => navigation.goBack()} />
                })}
                />

            <Stack.Screen name='Location' component={LocationScreen}
                options={({navigation}) => ({
                    animationType: 'slide',
                    presentation: 'transparent',
                    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
                    headerLeft: () => {},
                    headerRight: () => <Button title="Cancel" onPress={() => navigation.goBack()} />
                })}
                />

            <Stack.Screen name='Event time' component={TimeScreen} />
            <Stack.Screen name='Add tags' component={TagsScreen} 
                options={({navigation}) => ({
                    animationType: 'slide',
                    presentation: 'transparent',
                    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
                    headerLeft: () => <Button title="Cancel" onPress={() => navigation.goBack()} />,
                    headerRight: () => <Button title="Done" onPress={() => navigation.goBack()} />,
                })}
            />
            <Stack.Screen name='Event image' component={ImageScreen}
            options={({navigation}) => ({
                animationType: 'slide',
                presentation: 'transparent',
                cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
                headerLeft: () => {},
                headerRight: () => <Button title="Cancel" onPress={() => navigation.goBack()} />
            })}
        />
        </Stack.Navigator>


        // <TouchableOpacity onPress={() => navigation.navigate('Modal')}
        //     style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Text style={{ fontSize: 24 }}>Press Me to create an Event</Text>
        // </TouchableOpacity>
    )
}