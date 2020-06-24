import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import backgroundCopy from './images/backgroundCopy.jpg'
import { StyleSheet, View, Image } from 'react-native';
import Home from './components/home'
import Login from './components/login';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Image 
      source={backgroundCopy}
      style={styles.backgroundImage}
      />
      <Home/>
    </View>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex:1,
    width: 400,
    height: 50
  }
});
