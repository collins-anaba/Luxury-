import React, { useState,useContext}from 'react';
import { TouchableOpacity,StyleSheet,ImageBackground,Image} from 'react-native';
import {Text, Card,Input,Button} from 'react-native-elements';
import {Context as AuthContext} from '../redux/authContext';
import {NavigationEvents} from 'react-navigation';
import Spacer from './spacer';



const LoginScreen = ({navigation}) => {
    const {state, login , clearErrorMessage} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
<ImageBackground source={require('../assets/backgroundColor.jpg')} style={styles.container}> 
    <Image source={require('../assets/logo.png')} style={styles.image1}/>
    <Spacer/>
<Card containerStyle={{ height: 400, marginBottom:200 , borderRadius: 10}}>
<NavigationEvents
 onWillBlur={clearErrorMessage}/>
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
     {state.errorMessage2 ? <Text style={styles.errorMessage}>{state.errorMessage2}</Text> : null}
    <Button
     title="Sign In"
     buttonStyle={{backgroundColor:'red'}}
     onPress={()=> login({email,password})}/>
     <Spacer/>
     <TouchableOpacity>
    <Text style={{fontSize: 20}}
    onPress={()=> navigation.navigate("PasswordScreen")}>{"Forgot username/password"}</Text>
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
 
LoginScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };
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
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 5
    }
})

export default LoginScreen;

