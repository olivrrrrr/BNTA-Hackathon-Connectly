import React, { useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeContainer from './Containers/home-container';
import CalendarContainer from './Containers/calendar-container';
import EventStack from './Navigation/EventStack';
import OthersContainer from './Containers/others-container';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EventNameScreen from './Components/CreateEvent/EventNameScreen';
import { ThemeContext } from './Context/ThemeContext';
import { mockServer } from './Mocks/MockServer';
import { getAllEvents } from './Adaptors/BackendAdaptor';
import { getHeaderTitle } from '@react-navigation/elements';
import Header from './Components/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
if (window.server) {
  server.shutdown()
}

window.server = mockServer();

const App = () => {
  const Tab = createBottomTabNavigator();

  const homeName = "Home";
  const calenderName = "calendar";
  const othersName = "others";
  const createEventName = "create";

  const { toggle } = useContext(ThemeContext);

  const MyTheme = {
    colors: {
      background: toggle ? '#333' : '#FFFFFF',
      card: toggle ? '#333' : '#FFFFFF',
      border: toggle ? '#CCC' : '#333',
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
    <SafeAreaProvider>
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
              color = focused ? 'tomato' : color;
            } else if (rn === calenderName) {
              iconName = focused ? 'calendar' : 'calendar-outline';
              color = focused ? 'tomato' : color;
            } else if (rn === othersName) {
              iconName = focused ? 'settings' : 'settings-outline';
              color = focused ? 'tomato' : color;
            } else if (rn === createEventName) {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
              color = focused ? 'tomato' : color;
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarStyle: {
            height: 90,
            paddingHorizontal: 5,
            position: 'absolute',
            borderWidth: 0.2,
            borderRadius: 40,
          },
          tabBarActiveTintColor: 'tomato',
          tabBarShowLabel: false,
          header: ({ route, options }) => {
            const title = getHeaderTitle(options, route.name);

            return <Header title={title} style={options.headerStyle} />;
          }
        })}
      >

        <Tab.Screen name={homeName} component={HomeContainer} />
        <Tab.Screen name={calenderName} children={() => <CalendarContainer dark={toggle} allEvents={events} />} />
        <Tab.Screen name={createEventName} component={EventStack} />
        <Tab.Screen name={othersName} component={OthersContainer} />


      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  )
};

export default App;
