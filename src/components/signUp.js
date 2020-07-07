import React, { useState, useContext}from 'react';
import {  Image,StyleSheet,ImageBackground, TextInput} from 'react-native';
import { Card,Input,Button, Text} from 'react-native-elements';
import {Context as AuthContext} from '../redux/authContext';
import Spacer from './spacer';




const SignUpScreen = ({navigation}) => {
    const {state, signUp } = useContext(AuthContext)
    const [firstName, setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [telephoneNumber, setTelephoneNumber] = useState('')
    console.log(navigation)
    console.log(Input)

    return(
        
    
        <ImageBackground source={require('../assets/backgroundColor.jpg')} style={styles.container}>
         <Image source={require('../assets/logo.png')} style={styles.image1}/>
            <Card containerStyle={{ height: 450, width:375,marginBottom:200 , borderRadius: 10}}>
                <Input
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}/>
                <Input
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}/>
                <Input
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}/>
                <Input
                placeholder="Telephone Number"
                value={telephoneNumber}
                onChangeText={setTelephoneNumber}
                keyboardType="number-pad"
                />
                <Input
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                />
                {state.errorMessage ? <Text>{state.errorMessage}</Text> : null}
                <Button
                title="Enter"
                buttonStyle={{backgroundColor:'red'}}
                onPress={()=> signUp({firstName,lastName,email,password,telephoneNumber})}/>
            </Card>
        </ImageBackground>
    )
};

SignUpScreen.navigationOptions = () => {
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
    }
})

export default SignUpScreen;