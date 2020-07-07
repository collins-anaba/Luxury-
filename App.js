import React from 'react'
import { createStackNavigator, } from 'react-navigation-stack';
import { createAppContainer , createSwitchNavigator} from 'react-navigation';
import ProductScreen from './src/components/productScreen';
import UserDashboard from './src/components/userDashboard';
import LoginScreen from './src/components/loginScreen';
import ForgotPasswordScreen from './src/components/forgotPassword';
import SignUpScreen from './src/components/signUp';
import {Provider as AuthProvider} from './src/redux/authContext';
import LawnCareScreen from './src/components/lawnCare';
import CarDetailScreen from './src/components/carDetail';
import {setNavigator} from './src/components/navigationRef'



const switchNavigator = createSwitchNavigator(
  {
    loginFlow:createStackNavigator({
      Login: LoginScreen,
      SignUp: SignUpScreen,
      PasswordScreen: ForgotPasswordScreen,
      Products: ProductScreen

    }),
    secondaryFlow:createStackNavigator({
    Products: ProductScreen,
    Dashboard: UserDashboard,
    CarDetail: CarDetailScreen,
    LawnCare: LawnCareScreen
    })
  }

)


const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator)=> {setNavigator(navigator)}}/>
    </AuthProvider>
  )
}