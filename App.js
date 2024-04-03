import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';


function App () {
  return(
    <NavigationContainer>
    {/* <AppStack/> */}
    <AuthStack/>

    </NavigationContainer>
  );
}


export default App;
