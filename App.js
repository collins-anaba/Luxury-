// import React from 'react';
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import backgroundCopy from './images/backgroundCopy.jpg'
import Login from './components/login'
import { StyleSheet, View, Image } from 'react-native';


export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Image 
      source={backgroundCopy}
      style={styles.backgroundImage}
      />
      <Login/>
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
