import { View, TouchableOpacity, Text, StyleSheet, Pressable } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { Agenda, AgendaEntry, AgendaSchedule } from 'react-native-calendars';
import { Card } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ModalContext } from '../Context/ModalContext';
import SpecialModal from './SpecialModal';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CalendarComponent(props) {

  const currentDate = () => {
    const date = new Date();
    return date.toISOString().split('T')[0];
  }

  let date = currentDate();

  let initialState = {}
  initialState[date] = []


  const [userItems, setUserItems] = useState(initialState)

  useEffect(() => extractEvents(), [props.events])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch();
      const data = await response.json();
      console.log(data);

      const mappedData = data.map(item => {
        return {
          ...post,
        }
      })
    }

  })

  const extractEvents = () => {
    // console.log("child: " + props.events[0].title)
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

  const dateParser = (date) => {
    return date.split('T')[0];
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

  const { showModal, toggleModal } = useContext(ModalContext);

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
    // item is an event extracted from the function
    return (
      <>
      <TouchableOpacity onPress={() => toggleModal(item.id)}>
          <Card style={styles.cardContainer}>
            <Card.Content style={styles.cardContent}>
              <View>
                <Text>{item.title}</Text>
              </View>
            </Card.Content>
          </Card>
      </TouchableOpacity>
      {showModal.show && showModal.modalId === item.id ?
        <SpecialModal
        >
            <View style={styles.modalTextContainer}>
                <Text style={styles.modalText}>
                    <Ionicons name="calendar" size={15} color="purple" /> {item.title}
                </Text>
                <Text style={styles.modalText}>
                    <Ionicons name="information-circle" size={15} color="purple" /> What is it? {item.description}
                </Text>
                <Text style={styles.modalText}>
                    <Ionicons name="time-outline" size={15} color="purple" /> Start Date: {dateParser(item.startDate)}
                </Text>
                <Text style={styles.modalText}>
                    <Ionicons name="time-outline" size={15} color="purple" /> End Date: {dateParser(item.endDate)}
                </Text>
            </View>
        </SpecialModal> : null}
        </>
    )
  }

  return (
    <SafeAreaView style={styles.calendarComponentContainer}>
      <Agenda
        items={userItems}
        // loadItemsForMonth={loadItems}
        // selected={currentDate()}
        // minDate={getLimitDate(-365)}
        // maxDate={getLimitDate(731)}
        // pastScrollRange={50}
        // futureScrollRange={50}
        renderItem={renderItem}
        // rowHasChanged={(r1, r2) => {
        //   return r1.text !== r2.text;
        // }}
        // hideKnob={false}
        // showClosingKnob={true}
        // renderEmptyDate={() => {
        //   return <View />;
        // }}
        // theme={{
        //   dayTextColor: 'white',
        //   textDisabledColor: '#444',
        //   monthTextColor: '#888',
        //   agendaDayTextColor: '#808080',
        //   agendaTodayColor: '#808080',
        //   agendaKnobColor: 'white'
        // }}
      // disabledByDefault={true}
      // refreshing={false}
      // refreshControl={null}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  calendarComponentContainer: {
    flex: 1,
  },
  cardContainer: {
    marginTop: 30,
    marginRight: 20,
    borderRadius: 10
  },
  cardContent: {
    marginTop:0,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});