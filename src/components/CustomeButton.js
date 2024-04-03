import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function CustomeButton({label, onPress}) {
  return (
  
    <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: '#AD40AF',
      padding: 20,
      borderRadius: 10,
      marginBottom: 30,
    }}>
    <Text
      style={{
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 16,
        color: 'white',
      }}>
   {label}
    </Text>
  </TouchableOpacity>
  )
}