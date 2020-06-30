import React, { useState, useContext}from 'react';
import {  View, TouchableOpacity,StyleSheet} from 'react-native';
import { Card,Input,Button} from 'react-native-elements';
import {Context as AuthContext} from '../redux/authContext';
import { Image} from 'react-native';



const SignUpScreen = ({navigation}) => {
    const {state, signUp } = useContext(AuthContext)
    const [firstName, setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [telephoneNumber, setTelephoneNumber] = useState('');


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
                placeholder="Telephone Number"
                value={telephoneNumber}
                onChange={setTelephoneNumber}
                />
                <Input
                placeholder="Password"
                value={password}
                onChange={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                />
                <Button
                title="Enter"
                onPress={()=> signUp({firstName,lastName,email,telephoneNumber,password})}/>
            </Card>
        </View>
    )
};

SignUpScreen.navigationOptions = {
    headerShown: false
}

export default SignUpScreen;