import React, {Component}from 'react';
import firebase from 'firebase';

class Auth extends Component{
    componentWillMount(){
        firebase.initializeApp({
    apiKey: "AIzaSyAL_0jtn9EvuGdRje2mlQO44skOOcp44AA",
    authDomain: "luxuryvipservices-90825.firebaseapp.com",
    databaseURL: "https://luxuryvipservices-90825.firebaseio.com",
    projectId: "luxuryvipservices-90825",
    storageBucket: "luxuryvipservices-90825.appspot.com",
    messagingSenderId: "726338383371",
    appId: "1:726338383371:web:6ef2b42733765d6771610e",
    measurementId: "G-QVZRY63LX1"
    })

    }
    render(){
        return (
            <View>
                <Text>Login</Text>
            </View>
        )
    }
}

export default Auth