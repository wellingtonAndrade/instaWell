import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Screens/Login';
import Dashboard from './dashboard.route';

const Stack = createStackNavigator();

export default function Routes() {
  return (   
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerStyle: {backgroundColor: '#7159c1'}, headerTintColor: '#FFF'}}>
        <Stack.Screen name="Login" component={Login} options={{title: "Entrar"}} />
        <Stack.Screen name="Feed" component={Dashboard} />
      </Stack.Navigator>
  );
}