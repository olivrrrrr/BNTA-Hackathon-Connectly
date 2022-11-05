import { View, TouchableOpacity, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Agenda, AgendaEntry, AgendaSchedule} from 'react-native-calendars'; 
import {Card} from 'react-native-paper';
import { getUserById } from '../Adaptors/BackendAdaptor';

export default function CalendarContainer({ navigation }) {

  const currentDate = () => {
    const date = new Date();
    console.log(date);
    return date.toISOString().split('T')[0];
  }

  let date = currentDate();

  let initialState = {}
  initialState[date] = []

  const[items, setItems] = useState(initialState)

  useEffect(() => {
    getUserById(1).then((res) => {
      extractUsersEvents(res.users)})
  }, [])

  const extractUsersEvents = (user) => {
    let newItems = {...initialState}
    user.events.forEach((event) => {
      let eventDate = timeToString(event.startDate);
      if(!newItems[eventDate]) {
        newItems[eventDate] = [event];
      }
      else {
        newItems[eventDate] = [...newItems[eventDate], event];
      }
    })
    setItems(newItems);
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
      <TouchableOpacity style={{marginTop: 10}}>
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
        <View style={{ flex: 1}}>
            <Agenda
  items={items}
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
  // disabledByDefault={true}
  // refreshing={false}
  // refreshControl={null}
  style={{}}
/>
        </View>
    )
}