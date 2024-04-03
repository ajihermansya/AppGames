import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import GameDetailScreen from '../screens/GamesDetailScreen';
import HomeScreen from '../screens/HomeScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const HomeStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="GameDetails" component={GameDetailScreen}
      options={({route}) => ({
        title: route.params?.title
      })} />
    </Stack.Navigator>
  );
};

const getTabBarVisibility = (route) => {
  // console.log(route);
  //INI ADALAH FUNGSI GETTER IN REACT NATIVE
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if (routeName == 'GameDetails') {
    return 'none'
  }
  return 'flex'
}


const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#AD40AF',
        },
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: 'yellow',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={ ({route}) =>( {
          tabBarStyle:{display:getTabBarVisibility(route),
            backgroundColor: '#AD40AF',},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarBadge: 8,
          tabBarBadgeStyle: {
            backgroundColor: 'yellow',
            },
          tabBarIcon: ({color, size}) => (
            <Feather name="shopping-bag" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
