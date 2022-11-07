import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import { event } from 'react-native-reanimated';
import CalendarComponent from '../Components/CalendarComponent';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import SliderToggle from '../Components/SliderToggle';
import EventToggle from '../Components/EventToggle';
import { useContext } from 'react';
import { ThemeContext }from '../Context/ThemeContext';

export default function CalendarContainer({ navigation, dark, allEvents }) {

    const [filteredData, setFilteredData] = useState(allEvents)
    const [searchValue, setSearchValue] = useState('')

    
    const { toggle } = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor: toggle ? '#333' : '#FFFFFF',
        color: toggle ? '#CCC' : '#333',
    }

    const filter = (text) => {
        if (text) {

            setSearchValue(text)
            const searchParam = text.toLowerCase().replace(/\s/g, '');
            const data = []
            
            for (let index = 0; index < allEvents.length; index++) {
                const event = allEvents[index];
                const tags = event.tags
                const name = event.title.toLowerCase().replace(/\s/g, '')
                const location = event.location.toLowerCase().replace(/\s/g, '')
                for (let j = 0; j < tags.length; j++) {
                    const tag = tags[j].toLowerCase().replace(/\s/g, '')
                    if (tag.includes(searchParam) || name.includes(searchParam) || location.includes(searchParam)) {
                        if (!data.includes(event)) {
                            data.push(event)    
                        }
                        
                    }
                }
            }

            setFilteredData(data)     
        }

        else {
            setFilteredData(allEvents)
            setSearchValue('')
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {console.log("parent: " + filteredData[0].title)}
            <SearchBar searchText={searchValue} setSearchText={filter} theme={dark} />
            <SliderToggle />
            <CalendarComponent events={filteredData}/>
            <EventToggle />
        </SafeAreaView>
    )

}