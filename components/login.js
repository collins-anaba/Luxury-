import React, {Component}from 'react';
import {  View, Text } from 'react-native';
import {Card,Input,Button} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

class ButtonAction extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {},
            redirect: false
        }
    }
}

const Login = ({navigation}) => {
    return (
        <View>
<Card>

    <Text>{'Welcome Back'}</Text>
      <Input placeholder="Username"
      ></Input>
      <Input placeholder="Password"
      ></Input>
    <Button title="Sign In"
    onPress={()=> navigation.navigate("Products")}/>
    <Text>{"Forgot username/password"}</Text>
    <Text>{"Not a member? Apply Now"}</Text>


</Card>
        </View>
    )
}

export default Login;