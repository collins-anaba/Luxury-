import React from 'react'
import 'react-native-gesture-handler';
import { createStackNavigator, } from 'react-navigation-stack';
import { createAppContainer , createSwitchNavigator} from 'react-navigation';
import ProductScreen from './components/productScreen';
import UserDashboard from './components/userDashboard';
import LoginScreen from './components/loginScreen';
import ForgotPassword from './components/forgotPassword';
import SignUpScreen from './components/signUp';
import {Provider as AuthProvider} from './redux/authContext';


const switchNavigator = createSwitchNavigator(
  {
    loginFlow:createStackNavigator({
      Login: LoginScreen,
      SignUp: SignUpScreen,
      Password: ForgotPassword,
    }),
    Products: ProductScreen,
    Dashboard: UserDashboard,
  }
  
)


const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <AuthProvider>
      <App/>
    </AuthProvider>
  )
}



