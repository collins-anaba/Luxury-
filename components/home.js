import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './login';
import App from '../App';
import Products from './products';
import { NavigationContainer, StackActions } from '@react-navigation/native';

const stack = createStackNavigator ()

function Navigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Login"
                component={Login}
                options={{title: 'Welcome back"}}
                />
                <Stack.Screen/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
    



export default createAppContainer(navigator);

