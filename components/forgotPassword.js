import React, {Component, useState}from 'react';
import {  View, TouchableOpacity,StyleSheet} from 'react-native';
import {Text, Card,Input,Button} from 'react-native-elements';

const ForgotPassword = () => {
    return(
        <View>
            <Card>
                <Input
                placeholder="Enter your email address here"/>
                    <Button
                placeholder="Enter"/>
            </Card>
        </View>
    )
};
const styles = StyleSheet.create({});

ForgotPassword.navigationOptions = {
    headerShown: false
}

export default ForgotPassword;