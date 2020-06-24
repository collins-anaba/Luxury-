import React, {Component, useState}from 'react';
import {  View, Text ,TouchableOpacity} from 'react-native';
import {Card,Input,Button} from 'react-native-elements';




const LoginScreen = ({navigation}) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    return (
<View>
<Card>
    <Text>{'Welcome Back'}</Text>
      <Input 
      placeholder="Username"
      value={userName}
      onChangeText={setUserName}
      />
      <Input 
      placeholder="Password"
      value={password}
      onChangeText={setPassword}/>
    <Button title="Sign In"
    onPress={()=> navigation.navigate("Products")}/>
    <Text>{"Forgot username/password"}</Text>
    <Text>{"Not a member? Apply Now"}</Text>
</Card>
</View>
    )
}

export default LoginScreen;