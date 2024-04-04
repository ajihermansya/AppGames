import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';
import {AuthProvider} from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';

function App() {
  return (
    <AuthProvider>
   <AppNav/>
    </AuthProvider>
  );
}

export default App;
