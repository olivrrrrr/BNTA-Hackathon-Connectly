import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import EventContainer from '../Containers/event-container';
import ModalContainer from '../Containers/modal-container';

const Stack = createStackNavigator();

export default function EventStack() {
    return (
        <Stack.Navigator
        >
            <Stack.Screen name="Create" component={EventContainer} 
            options={{
                headerMode: 'none'
            }}/>
            <Stack.Screen name="Modal" component={ModalContainer} 
            options={{ 
                presentation: 'transparent',
                cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
                }} />
        </Stack.Navigator>
    )
}