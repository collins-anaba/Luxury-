import React, { useState, useContext}from 'react';
import {  View, TouchableOpacity,StyleSheet} from 'react-native';
import { Card,Input,Button, Text} from 'react-native-elements';
import {Context as AuthContext} from '../redux/authContext';



const SignUpScreen = ({navigation}) => {
    const {state, signUp } = useContext(AuthContext)
    const [firstName, setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [telephoneNumber, setTelephoneNumber] = useState('');

    console.log(state)

    return(
        <View>
            <Card>
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
                onPress={()=> signUp({firstName,lastName,email,password,telephoneNumber})}/>
            </Card>
        </View>
    )
};

SignUpScreen.navigationOptions = {
    headerShown: false
}

export default SignUpScreen;