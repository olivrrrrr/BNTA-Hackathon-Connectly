import { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import CalendarComponent from '../Components/CalendarComponent';
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native';
export default function CalendarContainer({ navigation, dark, allEvents }) {

    const [filteredData, setFilteredData] = useState(allEvents)
    const [searchValue, setSearchValue] = useState('')


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
        <SafeAreaView style={[styles.calendarContainer]}>
            <SearchBar searchText={searchValue} theme={dark} setSearchText={filter} />
            <CalendarComponent events={filteredData} />
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    calendarContainer: {
        flex: 1
    },
});