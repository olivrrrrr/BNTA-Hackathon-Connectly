import { TextInput, Button, StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from 'react'
import ImagePicker from 'react-native-image-picker'
import {launchImageLibrary} from 'react-native-image-picker'

export default function ImageScreen({ navigation }) {
    
    const [photo, setPhoto] = useState(null)
    const ImagePicker = require('react-native-image-picker');

    handleChoosePhoto = () => {
        const options = {
          noData: true,
        }
        ImagePicker.launchImageLibrary(options, response => {
          if (response.uri) {
            setPhoto(response)
          }
        })
      }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {photo && (
                <Image
                    source={{ uri: photo.uri }}
                    style={{ width: 300, height: 300 }}
                />
                )}
                <Button title="Choose Photo" onPress={handleChoosePhoto} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'flex-start' 
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})