import React from 'react'
import 'react-native-gesture-handler';
import { createStackNavigator, } from 'react-navigation-stack';
import { createAppContainer , createSwitchNavigator} from 'react-navigation';
import ProductScreen from './src/server/components/productScreen';
import UserDashboard from './src/server/components/userDashboard';
import LoginScreen from './src/server/components/loginScreen';
import ForgotPassword from './src/server/components/forgotPassword';
import SignUpScreen from './src/server/components/signUp';
import {Provider as AuthProvider} from './src/server/redux/authContext';


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



