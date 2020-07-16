import React, { useState, useContext}from 'react';
import {  Image,StyleSheet,ImageBackground, NativeModules, ScrollView,KeyboardAvoidingView} from 'react-native';
import { Card,Input,Button, Text} from 'react-native-elements';
import {Context as AuthContext} from '../redux/authContext';
import {NavigationEvents} from 'react-navigation';
import {Spacer,Spacer2} from '../components/spacer';

const StripeBridge = NativeModules.StripeBridge;



const SignUpScreen = ({navigation}) => {
    const {state, signUp, clearErrorMessage } = useContext(AuthContext)
    const [firstName, setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [telephoneNumber, setTelephoneNumber] = useState('');
    const [ccNumber, setCcNumber] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [cvc, setCvc] = useState('');


    console.log(state)

    return(
        
    
        <ImageBackground source={require('../assets/backgroundColor.jpg')} style={styles.container}>
         <Image source={require('../assets/logo.png')} style={styles.image1}/>
         <NavigationEvents
         onWillBlur={clearErrorMessage}/>
            <Card containerStyle={{ height: 600, width:375,marginBottom:200 , borderRadius: 10}}>
         <ScrollView>
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
                <Input
                placeholder="Enter Credit card Number here"
                editable={true}
                maxLength={16}
                value={ccNumber}
                onChangeText={setCcNumber}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                multiLine={false}
                keyboardType="number-pad"
                />
                <Input
                placeholder="MM"
                editable={true}
                maxLength={2}
                value={month}
                onChangeText={setMonth}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                keyboardType='number-pad'
                multiLine={false}
                />
                <Input
                maxLength={2}
                placeholder="YY"
                value={year}
                onChangeText={setYear}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                keyboardType='number-pad'
                multiLine={false}
                />
                <Input
                placeholder="CVC"
                editable={true}
                maxLength={4}
                value={cvc}
                onChangeText={setCvc}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                keyboardType='number-pad'
                multiLine={false}
                />
                {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
                <Spacer2/>
                <Button
                title="Enter"
                buttonStyle={{backgroundColor:'red'}}
                onPress={()=> signUp({firstName,lastName,email,password,telephoneNumber,ccNumber,month,year,cvc})}/>
            </ScrollView>
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
        width: 80,
        height:80,
        marginTop:130
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 5
    }
})

export default SignUpScreen;