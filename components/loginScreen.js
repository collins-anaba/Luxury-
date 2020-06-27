import React, {Component, useState}from 'react';
import {  View, TouchableOpacity,StyleSheet} from 'react-native';
import {Text, Card,Input,Button} from 'react-native-elements';
import Spacer from './spacer';




const LoginScreen = ({navigation}) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    console.log(navigation)
    return (
<View>
    <Spacer/>
<Card>
    <Text style={{alignItems:'center',fontSize: 15, }}>{'Welcome Back'}</Text>
    <Spacer/>
      <Input 
      placeholder="Username"
      value={userName}
      onChangeText={setUserName}
      />
      <Spacer/>
      <Input 
      style={{fontSize: 20}}
      placeholder="Password"
      value={password}
      onChangeText={setPassword}/>
    <Button
     title="Sign In"
     onPress={()=> navigation.navigate("Products")}/>
     <Spacer/>
    <Text style={{fontSize: 20}}>{"Forgot username/password"}</Text>
    <Spacer/>
    <Text style={{fontSize: 20}}>{"Not a member? Apply Now"}</Text>
</Card>
</View>
    )
};
 
LoginScreen.navigationOptions = {
        headerShown: false
}
const styles = StyleSheet.create({})

export default LoginScreen;