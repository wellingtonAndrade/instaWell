import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from '../components/Feed';
import Tab2 from '../Screens/Tab2';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Tab2" component={Tab2} />
      </Tab.Navigator>
  );
}