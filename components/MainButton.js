import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const MainButton  = (props) =>{
  return(
    <TouchableOpacity
      style={{
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#d6d7da',
        padding: 10
      }}
      onPress={props.onPress}
     >
     <Text style={{
         fontSize: 16,
         color: '#d6d7da',
         textAlign: 'center'
       }}>Get Complement</Text>
    </TouchableOpacity>
  )
}
