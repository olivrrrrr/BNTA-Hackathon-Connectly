import { Text, StyleSheet, Switch, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from 'react';
import DateTimeCard from "./DateTimeCard";
import { Card } from 'react-native-paper'
import { NewEventContext } from '../../Context/NewEventContext';
import { useContext } from 'react';

export default function TimeScreen({ navigation }) {

    const { date, endDate, setDate, setEndDate } = useContext(NewEventContext)


    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const onChangeEnd = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setEndDate(currentDate);
    };
    
    const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
        setShow(false);
        // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
    };
    
    const showDatepicker = () => {
        showMode('date');
        setShow(true)
    };
    
    const showTimepicker = () => {
        showMode('time');
        setShow(true)
    };
    
    return (
        <SafeAreaView style={styles.safeAreaView}>
            {/* <Button onPress={showDatepicker} title="Show date picker" />
            <Button onPress={showTimepicker} title="Show time picker" /> */}
            {/* <Card elevation={0}>
                <Card.Title
                    title='All day'
                    right={()=>
                        <View styles={{ paddingRight:10, flexDirection:'row' }}>
                            <Switch />
                        </View>}
                />
            </Card> */}
            <DateTimeCard title={'Starts'} date={date} onChange={onChange}/>
            <DateTimeCard title={'Ends'} date={endDate} onChange={onChangeEnd}/> 
        </SafeAreaView>
    );
    };

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        paddingRight: 10
    }
})