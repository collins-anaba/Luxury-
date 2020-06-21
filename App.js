import React from 'react';
import backgroundCopy from './images/backgroundCopy.jpg'
import { StyleSheet, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      source={backgroundCopy}
      style={styles.backgroundImage}
      />
    </View>
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
