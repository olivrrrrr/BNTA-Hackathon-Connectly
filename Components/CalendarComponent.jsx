import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { Agenda, AgendaEntry, AgendaSchedule } from 'react-native-calendars';
import { Card } from 'react-native-paper';
import { ThemeContext } from '../Context/ThemeContext';

export default function CalendarComponent(props) {
  const [{key, theme}, setTheme] = useState({key: 'dark', theme:{}})

  const { toggle } = useContext(ThemeContext);

  const themeStyles = {
      calendarBackground: '#333',
  }
  const currentDate = () => {
    const date = new Date();
    console.log(date);
    return date.toISOString().split('T')[0];
  }

  let date = currentDate();

  let initialState = {}
  initialState[date] = []

  const [userItems, setUserItems] = useState(initialState)

  useEffect(() => extractEvents(), [props.events])

  const extractEvents = () => {
    console.log("child: " + props.events[0].title)
    let newItems = { ...initialState }
    props.events.forEach((event) => {
      let eventDate = timeToString(event.startDate);
      if (!newItems[eventDate]) {
        newItems[eventDate] = [event];
      }
      else {
        newItems[eventDate] = [...newItems[eventDate], event];
      }
    })
    setUserItems(newItems);
  }

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  const getLimitDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days)
    return date.toISOString().split('T')[0];
  }

  // const[items, setItems] = useState({
  //   '2022-11-05': [{name: 'event1'}, {name: 'event3'}, {name: 'event4'}],
  //   '2022-11-06': [{name: 'event2'}]
  // })

  // // const loadItems = (day) => {
  // //   setTimeout(() => {
  // //     for (let i = -15; i < 85; i++) {
  // //       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
  // //       const strTime = timeToString(time);
  // //       if (!items[strTime]) {
  // //         items[strTime] = [];
  // //         const numItems = Math.floor(Math.random() * 3 + 1);
  // //         for (let j = 0; j < numItems; j++) {
  // //           items[strTime].push({
  // //             name: 'Item for ' + strTime + ' #' + j,
  // //             // height: Math.max(50, Math.floor(Math.random() * 150)),
  // //           });
  // //         }
  // //       }
  // //     }
  //     const newItems = {};
  //     Object.keys(items).forEach((key) => {
  //       newItems[key] = items[key];
  //     });
  //     setItems(newItems);
  //   }, 1000);
  // }

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{ marginTop: 10 }}>
        <Card>
          <Card.Content>
            <View>
              <Text>{item.title}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.calendarComponentContainer}>
      <Agenda
        items={userItems}
        // loadItemsForMonth={loadItems}
        selected={currentDate()}
        minDate={getLimitDate(-365)}
        maxDate={getLimitDate(731)}
        pastScrollRange={50}
        futureScrollRange={50}
        renderItem={renderItem}
        rowHasChanged={(r1, r2) => {
          return r1.text !== r2.text;
        }}
        hideKnob={false}
        showClosingKnob={true}
        renderEmptyDate={() => {
          return <View />;
        }}
        theme={{
          calendarBackground: '#808080',
          dayTextColor: '#fff',
          textDisabledColor: '#444',
          monthTextColor: '#888',
          agendaDayTextColor: 'yellow',
          agendaDayNumColor: 'green',
          agendaTodayColor: 'red',
          agendaKnobColor: 'blue'
        }}
        // disabledByDefault={true}
        // refreshing={false}
        // refreshControl={null}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  calendarComponentContainer: {
      flex: 1,
  },
});