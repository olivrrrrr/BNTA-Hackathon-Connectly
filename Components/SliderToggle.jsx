import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import SwitchToggle from "react-native-switch-toggle";
import { ThemeContext } from "../Context/ThemeContext";

export default function SliderToggle() {

  const { toggle, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <SwitchToggle
        switchOn={toggle}
        circleColorOff="white"
        circleColorOn="white"
        backgroundColorOff="grey"
        backgroundColorOn="tomato"
        onPress={toggleTheme}
        value={toggle}
        containerStyle={{
          marginTop: 5,
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