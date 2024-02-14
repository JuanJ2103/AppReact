import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Profile from '../../modules/profile/adapters/screens/Profile';
import Sports from '../../modules/sports/adapters/screens/Sports';

const Stack = createStackNavigator();

export default function SportsStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name = "Sports"
        component = {Sports}
        options = {{title: "Sports"}}
        />
    </Stack.Navigator>
  )
}