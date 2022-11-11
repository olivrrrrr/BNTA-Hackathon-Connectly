import React, { useState, Component, Fragment } from "react";
import { TextInput, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchableDropdown from 'react-native-searchable-dropdown';
import { NewEventContext } from '../../Context/NewEventContext';
import { useContext } from 'react';

const items = [
    'tech', 'women', 'religious', 'mental health', 'wellbeing'
]

export default function TagsScreen({ navigation }) {

    const { setTags } = useContext(NewEventContext)

    const [search, setSearch] = useState('')
    const [selectedItems, setSelectedItems] = useState('')
    // const [tags, setTags] = useState('')

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <TextInput
                style={styles.input}
                // value={text}
                placeholder="Search tags"
                placeholderTextColor='gray'
                onChangeText={(input) => {setTags(input)}}
            />
            {/* <SearchableDropdown
            onItemSelect={(item) => {
              const items = selectedItems
              items.push(item)
              setSelectedItems({items});
            }}
            containerStyle={{ padding: 5, backgroundColor:'red' }}
            onRemoveItem={(item, index) => {
              const items = selectedItems.filter((sitem) => sitem !== item);
              setSelectedItems({items});
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
            defaultIndex={2}
            resetValue={false}
            textInputProps={
              {
                placeholder: "placeholder",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                },
                onTextChange: text => alert(text)
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
        /> */}
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