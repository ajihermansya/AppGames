import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import AuthStack from './AuthStack';
import {AuthContext} from '../context/AuthContext';
import {ActivityIndicator, View} from 'react-native';
import AppStack from './AppStack';

const AppNav = () => {
  const {isLoading, userToken} = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
