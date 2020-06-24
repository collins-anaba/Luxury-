import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './loginScreen';
import ProductScreen from './productScreen';
import UserDashboard from './userDashboard';

const Stack = createStackNavigator();

const HomeScreen =()=> {
  return (
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen"component={LoginScreen}/> 
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="UserDashboard" component={UserDashboard} />
      </Stack.Navigator>
  );
}

export default HomeScreen;

