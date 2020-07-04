
import React from 'react'
import {View,StyleSheet, Button,ImageBackground, ScrollView,Linking,TouchableOpacity} from 'react-native';
import {Text, Card} from 'react-native-elements';
import Spacer from './spacer';



const carDetail = ({Children}) => {
return (
<ImageBackground source={require('../assets/rr.png')} style={styles.container}>
<ScrollView>
<Card containerStyle={{ height: 725,width:325, marginBottom:100 , marginTop:50, borderRadius: 10,backgroundColor: 'rgba(205, 199, 199, .3)'}}
style={styles.boxWithShadow} >
    <Text style={styles.title}>Car detailing</Text>
    <View>
        <Text style={styles.paragraph}>$25 The basic: Exterior and a vacuum, quick fast and clean</Text>
        <Spacer/>
        <Text style={styles.paragraph}> $50 the Standard: Exterior, vacuum, tire shine all hand washed</Text>
        <Spacer/>
        <Text style={styles.paragraph}>$100 The Supreme: The Exterior, vacuum, tire shine, wax, air fresheners</Text>
        <Spacer/>
        <Text style={styles.paragraph}>$350 The Executive: includes a loaner(S63, G63, S560, GTS63) Exterior, vacuum, tire shine, wax, buff, air fresheners</Text>
        <Spacer/>
    </View>
    <Spacer/>
    <Spacer/>
    <Spacer/>
<View style={styles.background}>
    <TouchableOpacity onPress={()=>Linking.tel('8448478463')}>
        <Text style={styles.emailLink}>Book us now</Text>
    </TouchableOpacity>
    </View>
</Card>
</ScrollView>
</ImageBackground>
)
};

carDetail.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    spacer: {
        margin: 12
    },
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
    title: {
        fontSize:26,
        fontFamily: 'Cochin',
        alignSelf: 'center',
        marginTop: 15,
        color: 'black'
            },
        emailLink: {
        fontSize:20,
        fontFamily: 'Cochin',
        alignSelf: 'center',
        marginTop: 15,
        color: 'white'
        },
        paragraph:{
        fontSize:18,
        fontFamily: 'Cochin',
        alignSelf: 'baseline',
        marginTop: 15,
        color: 'black'
        },
        background: {
            backgroundColor: 'red',
            height: 80,
            borderRadius: 10,
            marginHorizontal:19,
            borderWidth: 1,
            shadowRadius:3,
            shadowColor: 'black'
        }
        
});

export default carDetail;