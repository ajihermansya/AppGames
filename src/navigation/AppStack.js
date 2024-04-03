import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MomentsScreen from '../screens/MomentsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import CustomerDrawer from '../components/CustomeDrawer';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();
//jika drawer diganti stack juga bisa
//sesuaikan dengan kebutuhan
function AppStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomerDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor:'#aa18ea',
        drawerActiveTintColor:'white',
        drawerLabelStyle: 
        {marginLeft: -25, 
        fontFamily: 'Roboto-medium',
        fontSize:15,
        },
      }}>
      
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="home-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="person-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Moments"
        component={MomentsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="timer-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default AppStack;
