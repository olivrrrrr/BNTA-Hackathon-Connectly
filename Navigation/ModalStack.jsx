import { createStackNavigator } from "@react-navigation/stack";
import CreateEventScreen from "../Components/CreateEvent/CreateEventScreen";
import EventNameScreen from "../Components/CreateEvent/EventNameScreen";

const modalStack = createStackNavigator();

export default function ModalStack() {
    return (
        // <ModalContainer/>
        <modalStack.Navigator>
            <modalStack.Screen name="Create Event" component={CreateEventScreen} 
            options={{
                headerMode: 'none'
            }}/>
            <modalStack.Screen name="Event name" component={EventNameScreen} 
            options={{
                animationType: 'slide',
                presentation: 'transparent',
                }} /> 
        </modalStack.Navigator>
    )
}