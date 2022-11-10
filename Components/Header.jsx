import React, { useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { ThemeContext } from '../Context/ThemeContext';

export default function Header() {
  const { toggle } = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: toggle ? '#333' : '#FFFFFF',
    color: toggle ? '#CCC' : '#333',
    borderColor: toggle ? '#CCC' : '#333',
  }

  return (
    <View style={[themeStyles, styles.headerContainer]}>
      <Text style={[themeStyles, styles.headerTitle]}>
        Our App name + logo
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    borderBottomWidth: 0.3,
    justifyContent: 'center',
    borderRadius: 50,
  },
  headerTitle: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  }
});