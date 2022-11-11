import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Modal } from 'react-native';

import HomeContainer from './Containers/home-container';
import CalendarContainer from './Containers/calendar-container';
import EventStack from './Navigation/EventStack';
import ChatContainer from './Containers/chat-container';
import NotificationsContainer from './Containers/notification-container';
import CustomModal from './Components/CustomModal';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EventNameScreen from './Components/CreateEvent/EventNameScreen';

import { ThemeContext } from './Context/ThemeContext';
import {mockServer} from './Mocks/MockServer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
if(window.server) {
  server.shutdown()
}

window.server = mockServer();

const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const homeName = "Home";
  const calenderName = "calendar";
  const notificationsName = "notifications";
  const createEventName = "create";
  const chatName = "chat";

  const { toggle } = useContext(ThemeContext);

  const MyTheme = {
    colors: {
      background: toggle ? '#333' : '#FFFFFF',
      card: toggle ? '#333' : '#FFFFFF',
      border: toggle ? '#333' : '#CCC',
      text: toggle ? '#CCC' : '#333',
      notification: 'rgb(255, 69, 58)',
    },
  };

  return (
    <SafeAreaProvider>
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            console.log(route);

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
              color = focused ? 'tomato' : color;
            } else if (rn === calenderName) {
              iconName = focused ? 'calendar' : 'calendar-outline';
              color = focused ? 'tomato' : color;
            } else if (rn === notificationsName) {
              iconName = focused ? 'notifications' : 'notifications-outline';
              color = focused ? 'tomato' : color;
            } else if (rn === createEventName) {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
              color = focused ? 'tomato' : color;
            } else if (rn === chatName) {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
              color = focused ? 'tomato' : color;
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarStyle: {
            height: 90,
            paddingHorizontal: 5,
            position: 'absolute',
          },
          tabBarActiveTintColor: 'tomato',
          tabBarShowLabel: false,
          headerShown: false
        })} 
      >

        <Tab.Screen name={homeName} component={HomeContainer} />
        <Tab.Screen name={calenderName} component={CalendarContainer} />
        {/* <Tab.Group screenOptions={{ presentation: 'modal' }}> */}
          {/* <Tab.Screen name={createEventName} component={EventStack}
            listeners={({navigation}) => ({
              tabPress: event => {
                event.preventDefault()
                navigation.navigate('Modal')
              }
            })}
            /> */}
        {/* </Tab.Group> */}
        <Tab.Screen name={createEventName} component={EventStack} />
        <Tab.Screen name={notificationsName} component={NotificationsContainer} />
        <Tab.Screen name={chatName} component={ChatContainer} />


      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  )
};

export default App;
