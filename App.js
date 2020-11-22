/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ConnectionScreen from './src/screens/connection-screen';
import ListScreen from './src/screens/list-sreen';
import SearchScreen from './src/screens/search-screen';

 const switcNavigator = createSwitchNavigator(
  {
    connection: ConnectionScreen,

    itemFlow: createBottomTabNavigator(
      {
        Search: {
          screen:SearchScreen,
        },
        List: ListScreen
      },
      {
        tabBarOptions: {
          activeBackgroundColor:'#DDDDDD',
          labelStyle: {
            fontSize:15, 
            paddingBottom:10
          }
        },
      }
    )
  },
  {
    initialRouteName: 'itemFlow'
  }
 );

 const App = createAppContainer(switcNavigator);

 export default () => {
   return (
     <App />
   )
 }
