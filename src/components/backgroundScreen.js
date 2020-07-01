import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';
import backgroundCopy from '../images/backgroundCopy.jpg';

const BackgroundScreen = () => {
    return (
 <View>
     <Image 
     title='lvs' 
     source={backgroundCopy}
     style={styles.backgroundImage}/>
 </View>
    ) 
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      backgroundImage: {
        flex:1,
        width: 400,
        height: 50
      }
});

export default BackgroundScreen;