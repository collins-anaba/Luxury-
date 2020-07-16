import React from 'react'
import { createStackNavigator, } from 'react-navigation-stack';
import { createAppContainer , createSwitchNavigator} from 'react-navigation';
import ProductScreen from './src/screens/productScreen';
import UserDashboard from './src/components/userDashboard';
import LoginScreen from './src/screens/loginScreen';
import ForgotPasswordScreen from './src/screens/forgotPassword';
import SignUpScreen from './src/screens/signUp';
import {Provider as AuthProvider} from './src/redux/authContext';
import LawnCareScreen from './src/screens/lawnCare';
import CarDetailScreen from './src/screens/carDetail';
import {setNavigator} from './src/components/navigationRef'
// import ResolveAuthScreen from './src/components/resolveAuth';



const switchNavigator = createSwitchNavigator({
  

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