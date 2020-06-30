import React, {Component, useState}from 'react';
import {  View, TouchableOpacity,StyleSheet,ImageBackground,Image} from 'react-native';
import {Text, Card,Input,Button} from 'react-native-elements';
import Spacer from './spacer';
import firebase from 'firebase';




const LoginScreen = ({navigation}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(navigation)
    return (
<ImageBackground source={require('../assets/backgroundColor.jpg')} style={styles.container}>
    <Image source={require('../assets/logo.png')} style={styles.image1}/>
    <Spacer/>
<Card containerStyle={{ height: 400, marginBottom:200 , borderRadius: 10}}>
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
     buttonStyle={{backgroundColor:'red'}}
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
</ImageBackground>
    )
};
 
LoginScreen.navigationOptions = {
        headerShown: false
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    image1:{
        width: 175,
        height:175,
        marginTop:200 
    }
})

export default LoginScreen;