import CalendarComponent from '../Components/CalendarComponent';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import SliderToggle from '../Components/SliderToggle';
import EventToggle from '../Components/EventToggle';
import { useContext } from 'react';
import { ThemeContext }from '../Context/ThemeContext';

export default function CalendarContainer({ navigation }) {

  const { toggle } = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor: toggle ? '#333' : '#FFFFFF',
        color: toggle ? '#CCC' : '#333',
    }
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <SliderToggle />
        <CalendarComponent/>
        <EventToggle/>
      </SafeAreaView>

  )
}