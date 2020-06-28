import React, {Component, useState}from 'react';
import {  View, TouchableOpacity,StyleSheet} from 'react-native';
import {Text, Card,Input,Button} from 'react-native-elements';
import Spacer from './spacer';




const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(navigation)
    return (
<View>
    <Spacer/>
<Card>
    <Text>{'Welcome Back'}</Text>
    <Spacer/>
      <Input 
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      />
      <Spacer/>
      <Input 
      style={{fontSize: 20}}
      placeholder="Password"
      value={password}
      onChangeText={setPassword}
      autoCapitalize="none"
      autoCorrect={true}
      secureTextEntry={true}
      />
    <Button
     title="Sign In"
     onPress={()=> navigation.navigate("Products")}/>
     <Spacer/>
     <TouchableOpacity>
    <Text style={{fontSize: 20}}
    onPress={()=> navigation.navigate("Password")}>{"Forgot username/password"}</Text>
    </TouchableOpacity>
    <Spacer/>
    <TouchableOpacity>
    <Text style={{fontSize: 20}}
    onPress={()=> navigation.navigate("SignUp")}>{"Not a member? Apply Now"}</Text>
    </TouchableOpacity>
</Card>
</View>
    )
};
 
LoginScreen.navigationOptions = {
        headerShown: false
}
const styles = StyleSheet.create({})

export default LoginScreen;