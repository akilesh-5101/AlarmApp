import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import Header from './android/components/header';
import Listalarm from './android/components/listAlarm';
import AddAlarm from './android/components/addAlarm';


export default function App() {
  const [AlarmDate, create_AlarmDate] = useState([{ Alarm_d: new Date(), key: 'a'}]);
  const [AlarmString, create_AlarmString] = useState([{Alarm_s: '', key: 'a'}]);  
  const Count = useRef(0);
  const [watermarks, set_watermarks] = useState('');

  const deleteHandler = (key) => {
    Count.current = Count.current - 1;
    if(Count.current < 0){
      set_watermarks('No Alarms');
    }
    create_AlarmDate((prevAlarmDate) => {
      return prevAlarmDate.filter(Ala => Ala.key != key);
    });
    create_AlarmString((prevAlarmString) => {
      return prevAlarmString.filter(Ala => Ala.key != key);
    });
  }


  const addHandler = (Ala_string, Ala_Date) => {
    Count.current = Count.current + 1;
    
    if(Count.current >= 0){
      set_watermarks('');
    }
    if(Ala_Date.toString().length > 0){
      
      create_AlarmDate((prevAlarmDate) => {
        return [
          { Alarm_d: Ala_Date, key: Math.random().toString() },
          ...prevAlarmDate  
        ]
      })}
    if(Ala_string.length > 0){
      console.log('We are getting olalala');
      create_AlarmString((prevAlarmString) => {
        return [
          {Alarm_s: Ala_string, key: Math.random().toString() },
          ...prevAlarmString  
        ] 
      })}
    else{
      Alert.alert('Just make an alarm','Come on think!',[
        {text: 'Acknowledge', onPress: () => console.log('alert closed') }
      ]) 
    }
  }
 
  return (               
    <View style={styles.container}>
      <Header/>
      <Text style={styles.not}>{watermarks}</Text>
      <View style={styles.content}>
        <FlatList 
          data={AlarmString}
          renderItem={({ item }) => (
            <Listalarm prop={item} pressHandler={deleteHandler}/>
          )}
        />
      </View>
      <AddAlarm addHandler={addHandler} />

    <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
  content: {
    flex: 1,
    backgroundColor: 'orange'
  },

  input: {
    flex:10,
    alignContent: 'stretch',
    backgroundColor: 'yellow'
  },
  not: {
    textAlign : 'center', 
    fontSize: 30,
    backgroundColor: 'pink'
  }
});
