import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import App from '../App';
import Products from './products';

const Stack = createStackNavigator();

const Home =()=> {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login"component={Login}/>
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
  );
}

export default Home;

