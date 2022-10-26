import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeContainer from './Containers/home-container';
import SearchContainer from './Containers/search-container';
import SettingsContainer from './Containers/settings-container';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { ThemeContext } from './Context/ThemeContext';

const App = () => {
  const Tab = createBottomTabNavigator();

  const homeName = "Home";
  const searchName = "search";
  const settingsName = "settings";

  const { toggle } = useContext(ThemeContext);

  const MyTheme = {
    colors: {
      background: toggle ? '#333' : '#CCC',
      card: toggle ? '#333' : '#CCC',
      border: toggle ? '#333' : '#CCC',
      text: toggle ? '#CCC' : '#333',
      notification: 'rgb(255, 69, 58)',
    },
  };

  return (
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
            } else if (rn === searchName) {
              iconName = focused ? 'search' : 'search-outline';
              color = focused ? 'tomato' : color;
            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
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


          headerShown: false

        })}
      >

        <Tab.Screen name={homeName} component={HomeContainer} />
        <Tab.Screen name={searchName} component={SearchContainer} />
        <Tab.Screen name={settingsName} component={SettingsContainer} />

      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default App;
