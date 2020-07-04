import React from 'react'
import { createStackNavigator, } from 'react-navigation-stack';
import { createAppContainer , createSwitchNavigator} from 'react-navigation';
import ProductScreen from './src/components/productScreen';
import UserDashboard from './src/components/userDashboard';
import LoginScreen from './src/components/loginScreen';
import ForgotPassword from './src/components/forgotPassword';
import SignUpScreen from './src/components/signUp';
import {Provider as AuthProvider} from './src/redux/authContext';
import LawnCareScreen from './src/components/lawnCare';
import CarDetailScreen from './src/components/carDetail';



const switchNavigator = createSwitchNavigator(
  {
    loginFlow:createStackNavigator({
      Login: LoginScreen,
      SignUp: SignUpScreen,
      Password: ForgotPassword,
    }),
    Products: ProductScreen,
    Dashboard: UserDashboard,
    LawnCare: LawnCareScreen,
    CarDetail: CarDetailScreen
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



