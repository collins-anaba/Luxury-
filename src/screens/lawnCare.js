import React from 'react'
import {View,StyleSheet, ImageBackground, ScrollView,Linking,TouchableOpacity} from 'react-native';
import {Text, Card} from 'react-native-elements';
import {Spacer} from '../components/spacer';




const lawnCareScreen = ({Children}) => {
return (
<ImageBackground source={require('../assets/landscapeBack.png')} style={styles.container}>
<ScrollView>
<Card containerStyle={{ height: 725,width:325, marginBottom:100 , marginTop:50, borderRadius: 10,backgroundColor: 'rgba(205, 199, 199, .3)'}}
style={styles.boxWithShadow} >
    <Text style={styles.title}>Landscaping Services</Text>
    <View>
        <Text style={styles.paragraph}> ☑️ Landscape Maintenance</Text>
        <Spacer/>
        <Text style={styles.paragraph}> ☑️ Landscape Installation</Text>
        <Spacer/>
        <Text style={styles.paragraph}> ☑️ Tree Care</Text>
        <Spacer/>
        <Text style={styles.title}>We offer a Monthly maintenance Plan</Text>
        <Text style={styles.title}>Or a one time project</Text>
    </View>
    <Spacer/>
    <Spacer/>
    <Spacer/>
<View style={styles.background}>
    <TouchableOpacity onPress={()=>Linking.openURL('mailto:info@luxuryvipsvc.com')}>
        <Text style={styles.emailLink}>Email us for a quote</Text>
    </TouchableOpacity>
    </View>
</Card>
</ScrollView>
</ImageBackground>
)
};

lawnCareScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };

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

export default lawnCareScreen;