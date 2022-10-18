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
        backgroundColor: toggle ? '#333' : '#CCC',
        color: toggle ? '#CCC' : '#333',
        borderColor: toggle ? '#CCC' : '#333',
    }

    return (
        <View style={[themeStyles, styles.headerContainer]}>
            <Text style={[themeStyles, styles.headerTitle]}>
                This is the header component
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
      padding: 24,
      borderWidth: 1,
    },
    headerTitle: {
      marginTop: 30,
      marginBottom: 30,
      fontSize: 24,
      fontWeight: '600',
    },
    // sectionDescription: {
    //   marginTop: 8,
    //   fontSize: 18,
    //   fontWeight: '400',
    // },
    // highlight: {
    //   fontWeight: '700',
    // },
  });