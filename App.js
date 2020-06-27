import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator, } from 'react-navigation-stack';
import { createAppContainer , createSwitchNavigator} from 'react-navigation';
// import HomeScreen from './components/homeScreen';
import ProductScreen from './components/productScreen';
import UserDashboard from './components/userDashboard';
import LoginScreen from './components/loginScreen';


const navigationScreen = createStackNavigator(
  {
    Login: LoginScreen,
    Products: ProductScreen,
    Dashboard: UserDashboard

  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions:{
      title: "App"
    }
  },
  
)


export default createAppContainer(navigationScreen);



