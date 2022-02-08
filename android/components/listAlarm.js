import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


export default function Listalarm({prop, pressHandler}){
    if(prop.key == 'a'){
      console.log('heebuchike yeah')
      pressHandler(prop.key);
      return null
    }
    else{
    return(
            
            <View style={styles.listu}>
                <Text style={styles.textstuff}>{prop.Alarm_s}</Text>
                <Button
                    title= 'Delete'
                    onPress={() => {pressHandler(prop.key)}}
                    color= 'red'  />
                
            </View>
            
            
    )
    }
}

const styles= StyleSheet.create({
    listu: {
        padding: 13,
        marginTop: 16,
        
        marginBottom: 20,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        borderColor: 'darkblue',
        flexDirection: 'row',
      },
      textstuff: {
        fontSize: 25,
        marginRight: "20%",
      },
      
      
})