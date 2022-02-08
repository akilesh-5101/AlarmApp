import React, { useRef, useState } from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker'

export default function AddAlarm({addHandler}){
    const date = useRef(new Date());
    const Alarm = useRef('empty');
    
    
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false)
    const showDatePicker = () => {
        setIsDatePickerVisible(true);
    }

    const hideDatePicker = () => {
        setIsDatePickerVisible(false);
    }

    const onConfir = (selectedDate) => {
        hideDatePicker();
        const currentDate = selectedDate || date;
        
        let tempDate = new Date(currentDate);
        date.current = tempDate;
        console.log(tempDate);
        
        let fDate = tempDate.getDate() + '/' + tempDate.getMonth() + '/' + tempDate.getFullYear();
        let fTime = ', ' + tempDate.getHours() + ' : ' + tempDate.getMinutes();
        Alarm.current = fDate + " " + fTime;
        handleDatePicker();
    }

    

    const handleDatePicker = () => {
        var currentTime = Date.now();
        console.log(date.current);
        console.log(currentTime);
        console.log(Alarm.current);
        
        if(date.current.getTime() > currentTime){
            console.log('At last !');
           addHandler(Alarm.current, date.current);
        }
        else{
          Alert.alert('Past is past', 'Set an alarm for future',[
            {text: 'Ok', onPress: () => console.log("Ok pressed")}
          ])
        }
        hideDatePicker();
    }
    

    return(
        <View style={styles.input}>
            <Button title='Add Alarm' color='blue' onPress={() => {showDatePicker()}} />
            <DateTimePicker 
                isVisible={isDatePickerVisible}
                mode="datetime"
                display='default'
                // date={date}
                onConfirm = {onConfir}
                onCancel={hideDatePicker}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    input: {
        
        marginBottom: 10,
        marginLeft: "30%",
        marginRight: "30%",
        marginTop: 1,
        alignContent: 'stretch',
    }
})