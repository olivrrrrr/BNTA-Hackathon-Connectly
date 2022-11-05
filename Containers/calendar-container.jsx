import { View, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import {Agenda} from 'react-native-calendars'; 
import {Card} from 'react-native-paper';

export default function CalendarContainer({ navigation }) {

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  const currentDate = () => {
    const date = new Date();
    console.log(date);
    return date.toISOString().split('T')[0];
  }

  const getLimitDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days)
    return date.toISOString().split('T')[0];
  }

  const[items, setItems] = useState({})

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              // height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  }

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginTop: 10}}>
        <Card>
          <Card.Content>
          <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
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
  loadItemsForMonth={loadItems}
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
  disabledByDefault={true}
  refreshing={false}
  refreshControl={null}
  style={{}}
/>
        </View>
    )
}