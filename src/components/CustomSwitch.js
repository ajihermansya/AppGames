import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = value => {
    setSelectionMode(value);
    onSelectSwitch(value)
  }

  return (
    <View
    style={{
        height:44,
        width:'100%',
        backgroundColor:'#e4e4e4',
        borderRadius:10,
        marginBottom:20,
        borderColor:'#AD40AF',
        flexDirection:'row',
        justifyContent:'center'
    }}>
      <TouchableOpacity
      activeOpacity={1}
      onPress={()=> updateSwitchData(1)}
      style={{
        flex:1,
        backgroundColor:getSelectionMode ==1? '#AD40AF' : '#e4e4e4',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
      }}
      >
        <Text
        style={{
        backgroundColor:getSelectionMode ==1? '#AD40AF' : '#e4e4e4',
        color: getSelectionMode ==1? 'white' : 'black',
        fontSize:14,
        fontWeight:'bold',
        fontFamily:'Roboto-Medium',

        }}>{option1}</Text>
      </TouchableOpacity>


      <TouchableOpacity
      activeOpacity={1}
      onPress={()=> updateSwitchData(2)}
      style={{
        flex:1,
        backgroundColor:getSelectionMode == 2 ? '#AD40AF' : '#e4e4e4',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
      }}
      >
        <Text
        style={{
        backgroundColor:getSelectionMode == 2 ? '#AD40AF' : '#e4e4e4',
        fontSize:14,
        color: getSelectionMode ==1? 'black' : 'white',
        fontWeight:'bold',
        fontFamily:'Roboto-Medium',
        }}>{option2}</Text>
      </TouchableOpacity>
    </View>
  );
}
