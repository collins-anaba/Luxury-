import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer, createAppContainer} from '@react-navigation/native'
import { createStackNavigator,createAppContainer } from 'react-navigation-stack';
import { StyleSheet, View, Image } from 'react-native';
import HomeScreen from './components/homeScreen';
import ProductScreen from './components/productScreen';
import UserDashboard from './components/userDashboard';
import LoginScreen from './components/loginScreen';


const navigationScreen = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Products: ProductScreen,
    Dashboard: UserDashboard

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions:{
      title: "App"
    }
  }
)


export default navigationScreen;





// const Stack = createStackNavigator();

// export default function App(props) {
//   return (
//     <NavigationContainer>
//     <View>
//       <Home/>
//       <BackgroundScreen/>
//     </View>
//       </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
  
// });

