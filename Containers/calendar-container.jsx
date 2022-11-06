import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';

export default function CalendarContainer({ navigation, dark, allEvents }) {

    const [filteredData, setFilteredData] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const filter = (text) => {
        if (text) {
            setFilteredData(allEvents.filter(event => event.tags[0] === text))
            setSearchValue(text)
        }
        else{
            setFilteredData(allEvents)
            setSearchValue('')
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SearchBar searchText={searchValue} setSearchText={filter}/>
            <Text
                //onPress={() => navigation.navigate('Home')} 
                style={{ fontSize: 26, fontWeight: 'bold' }}>Calendar Screen
            </Text>
            <Text>{filteredData.map(event => <Text>"{event.title}"{"\n"}</Text>)}</Text>
        </View>
    )
}