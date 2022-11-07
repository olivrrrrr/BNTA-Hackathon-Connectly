import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import EventContainer from '../Containers/event-container';
import ModalContainer from '../Containers/modal-container';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native";

const Stack = createStackNavigator();

export default function EventStack() {
    return (


        <Stack.Navigator
        >
            {/* <Stack.Screen name="Create" component={EventContainer} 
            options={{
                headerMode: 'none'
            }}/> */}
            <Stack.Screen name="Modal" component={ModalContainer} 
            options={{ 
                presentation: 'transparent',
                cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
                }} />
            
        </Stack.Navigator>

        // <TouchableOpacity onPress={() => navigation.navigate('Modal')}
        //     style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Text style={{ fontSize: 24 }}>Press Me to create an Event</Text>
        // </TouchableOpacity>
    )
}