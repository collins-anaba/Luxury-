import React, {Component, useState}from 'react';
import {  View, TouchableOpacity,StyleSheet} from 'react-native';
import { Card,Input,Button} from 'react-native-elements';

const SignUpScreen = ({navigation}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return(
        <View>
            <Card>
                <Input
                placeholder="First Name"
                value={firstName}
                onChange={setFirstName}/>
                <Input
                placeholder="Last Name"
                value={lastName}
                onChange={setLastName}/>
                <Input
                placeholder="Email Address"
                value={email}
                onChange={setEmail}
                autoCapitalize="none"
                autoCorrect={false}/>
                <Input
                placeholder="Password"
                value={password}
                onChange={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                />
                <Input
                placeholder="Enter your credit card number here"/>
                <Input
                placeholder="month"/>
                <Input
                placeholder="year"/>
                <Input
                placeholder="CVV"/>
                    <Button
                placeholder="Enter"/>
            </Card>
        </View>
    )
};

SignUpScreen.navigationOptions = {
    headerShown: false
}

export default SignUpScreen;