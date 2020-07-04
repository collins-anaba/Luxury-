import React, {Component, useState}from 'react';
import {  StyleSheet,ImageBackground,Image} from 'react-native';
import { Card,Input,Button} from 'react-native-elements';
import Spacer from './spacer';



const ForgotPassword = ({navigation}) => {
    const [email, setEmail] = useState('')
    
    return (
<ImageBackground source={require('../assets/backgroundColor.jpg')} style={styles.container}>
    <Image source={require('../assets/logo.png')} style={styles.image1}/>
    <Spacer/>
<Card containerStyle={{ height: 275, width:375,marginBottom:200 , borderRadius: 10}}>
    <Spacer/>
      <Input 
      placeholder="Enter your email address"
      value={email}
      onChangeText={setEmail}
      />
      <Spacer/>

    <Button
     title="Enter"
     buttonStyle={{backgroundColor:'red'}}
     onPress={()=> navigation.navigate("Products")}/>
     <Spacer/>

    <Spacer/>
    
</Card>
</ImageBackground>
    )
};
 
ForgotPassword.navigationOptions = {
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

export default ForgotPassword;