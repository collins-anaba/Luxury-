import React, {Component, useState}from 'react';
import {  View, TouchableOpacity,StyleSheet} from 'react-native';
import { Card,Input,Button} from 'react-native-elements';

const SignUpScreen = () => {

    return(
        <View>
            <Card>
                <Input
                placeholder="First Name"/>
                <Input
                placeholder="Last Name"/>
                <Input
                placeholder="Email Address"/>
                <Input
                placeholder="Password"/>
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