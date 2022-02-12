import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

import { Navigator } from './Tablist';
import { TabSearchScreen } from './TabSearch';

const Tab = createBottomTabNavigator();

export const Tabs = () =>{
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
        screenOptions={{
            tabBarActiveTintColor: '#5856D6',
            tabBarLabelStyle: {
                marginBottom: ( Platform.OS === 'ios' ) ? 0 : 10,
            },
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                backgroundColor:  'rgba(255,255, 255, 0.92)',
                borderWidth: 0,
                elevation: 0,
                height: ( Platform.OS === 'ios' ) ? 80 : 60,
            }
        }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={ Navigator }
        options={{
            tabBarLabel: 'List',
            tabBarIcon: ({ color }) =>( <Icon name='list-outline' color={ color }  size={ 25 } /> )
        }}
        />
      <Tab.Screen
      name="SearchScreen"
      component={ TabSearchScreen }
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color }) =>( <Icon name='search-outline' color={ color }  size={ 25 } /> )
    }}
      />
    </Tab.Navigator>
  );
}