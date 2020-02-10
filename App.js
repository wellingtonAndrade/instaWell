/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import Routes from './src/route/routes'
import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


export default function intawell(){
  return(
    <NavigationContainer>
      <StatusBar barStyle="light-content"/>
      <Routes />
    </NavigationContainer>
  );
}