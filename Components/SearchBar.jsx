import {View,TextInput,Text,StyleSheet} from "react-native";
import React from "react";

const SearchBar = (props)=>{
    const styles = StyleSheet.create({
        container:{
            margin: 10
        },
        input:{
            backgroundColor: props.theme ? "#262626" : "#fff",
            padding: 10,
            borderRadius: 10,
            color: props.theme? "#fff":"#000000",
            placeholderTextColor: props.theme? "#fff":"#000000",
            borderWidth: 1
        },
    });

    return(
        <View style={styles.container}>
            <TextInput
                placeholder="Search"
                placeholderTextColor = {props.theme? "#fff":"#000000"}
                style={styles.input}
                value={props.searchText}
                onChangeText={(text)=>props.setSearchText(text)}
                onSubmitEditing={props.onSubmit}
            />
        </View>
    )
}

export default SearchBar;

