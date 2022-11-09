import React, { useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeContainer from './Containers/home-container';
import CalendarContainer from './Containers/calendar-container';
import EventStack from './Navigation/EventStack';
import ChatContainer from './Containers/chat-container';
import NotificationsContainer from './Containers/notification-container';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from './Context/ThemeContext';
import { mockServer } from './Mocks/MockServer';
import { getAllEvents } from './Adaptors/BackendAdaptor';

if (window.server) {
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

  const [events, setEvents] = useState([]);
  useEffect(() => {
    getAllEvents().then((json) => {
      setEvents(json.events);
    })
  }, [])

  return (
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
        <Tab.Screen name={calenderName} children={() => <CalendarContainer dark={toggle} allEvents={events}/>} />
        <Tab.Screen name={createEventName} component={EventStack} />
        <Tab.Screen name={notificationsName} component={NotificationsContainer} />
        <Tab.Screen name={chatName} component={ChatContainer} />

      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default App;
