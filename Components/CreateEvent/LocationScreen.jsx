import React, { useState } from 'react';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { TextInput, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NewEventContext } from '../../Context/NewEventContext';
import { useContext } from 'react';

export default function LocationScreen({ navigation }) {

    const { setLocation } = useContext(NewEventContext)
    
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <TextInput
                style={styles.input}
                // value={text}
                placeholder="Search"
                placeholderTextColor='gray'
                onChangeText={(newText) => setLocation(newText)}
            />
            {/* <GooglePlacesInput /> */}
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
        // height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 20
    },
    // container: {
    //     flex: 1,
    //     padding: 10,
    //     paddingTop: Constants.statusBarHeight + 10,
    //     backgroundColor: '#ecf0f1',
    //   }
})


// const GooglePlacesInput = () => {
//   return (
//     <View styles={styles.container}>
//         <GooglePlacesAutocomplete
//           placeholder='Search'
//           onPress={(data, details = null) => {
//             // 'details' is provided when fetchDetails = true
//             console.log(data, details);
//           }}
//         //   query={{
//         //     key: 'YOUR API KEY',
//         //     language: 'en',
//         //   }}
//         />
//     </View>
//   );
// };