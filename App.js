import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { StyleSheet, View, Image } from 'react-native';
// import HomeScreen from './components/homeScreen';
import ProductScreen from './components/productScreen';
import UserDashboard from './components/userDashboard';
import LoginScreen from './components/loginScreen';


const navigationScreen = createStackNavigator(
  {
    // Home: HomeScreen
    Login: LoginScreen,
    Products: ProductScreen,
    Dashboard: UserDashboard

  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions:{
      title: "App"
    }
  }
)


export default createAppContainer(navigationScreen);



