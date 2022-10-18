import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import SwitchToggle from "react-native-switch-toggle";
import { ThemeContext, useTheme, useThemeUpdate } from "../Context/ThemeContext";

export default function SliderToggle() {

    const { toggle, toggleTheme } = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor: toggle ? '#333' : '#CCC',
        color: toggle ? '#CCC' : '#333',
    }

    return (
        <View style={styles.container}>
            <SwitchToggle
                switchOn={toggle}
                circleColorOff="grey"
                circleColorOn="#4169E1"
                backgroundColorOff="white"
                backgroundColorOn="white"
                onPress={toggleTheme}
                value={toggle}
                containerStyle={{
                    marginBottom: 5,
                    width: 55,
                    height: 28,
                    borderRadius: 25,
                    padding: 4,
                  }}
                circleStyle={{
                    width: 22,
                    height: 22,
                    borderRadius: 20,
                  }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
    }
  });