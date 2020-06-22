import React, {Component}from 'react';
import { StyleSheet, View, TextInput,Text } from 'react-native';
import {Card,Input,Button} from 'react-native-elements';


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

const Login = (props) => {
    return (
        <View>
<Card>

    <Text>{'Welcome Back'}</Text>
      <Input placeholder="Username"
      ></Input>
      <Input placeholder="Password"
      ></Input>
    <Button title="Sign In"
    onPress={()=> props.navigation.navigate('List')}/>
    <Text>{"Forgot username/password"}</Text>
    <Text>{"Not a member? Apply Now"}</Text>


</Card>
        </View>
    )
}

export default Login;