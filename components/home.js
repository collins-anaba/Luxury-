import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import App from '../App';
import Login from './login';


const Home = createStackNavigator(
    {
      Home: App,
      Components: Login
    },
    {
      initialRouteName: "App",
      defaultNavigationOptions: {
        title: "App"
      }
    }
  );
  
  export default createAppContainer(Home);