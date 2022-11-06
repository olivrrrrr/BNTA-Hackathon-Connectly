import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import { event } from 'react-native-reanimated';

export default function CalendarContainer({ navigation, dark, allEvents }) {

    const [filteredData, setFilteredData] = useState(allEvents)
    const [searchValue, setSearchValue] = useState('')

    // const filter = (text) => {
    //     if (text) {
    //         setFilteredData(allEvents.filter(event => event.tags[0].toLowerCase().includes(text.toLowerCase())))
    //         setSearchValue(text)
    //     }
    //     else{
    //         setFilteredData(allEvents)
    //         setSearchValue('')
    //     }
    // }

    const filter = (text) => {
        if (text) {
            setSearchValue(text)
            const searchParam = text.toLowerCase().replace(/\s/g, '');
            const data = []
            for (let index = 0; index < allEvents.length; index++) {
                const event = allEvents[index];
                const tags = event.tags
                const name = event.title.toLowerCase().replace(/\s/g, '')
                for (let j = 0; j < tags.length; j++) {
                    const tag = tags[j].toLowerCase().replace(/\s/g, '')
                    if (tag.includes(searchParam) || name.includes(searchParam)){
                        data.push(event)
                    }
                }    
            }
            setFilteredData(data)
        }
        else{
            setFilteredData(allEvents)
            setSearchValue('')
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SearchBar searchText={searchValue} setSearchText={filter} theme={dark}/>
            <Text
                //onPress={() => navigation.navigate('Home')} 
                style={{ fontSize: 26, fontWeight: 'bold' }}>Calendar Screen
            </Text>
            <Text>{filteredData.map(event => <Text >"{event.title}"{"\n"}</Text>)}</Text>
        </View>
    )
}