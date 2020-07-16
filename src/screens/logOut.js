import React, {useContext} from 'react';
import { TouchableOpacity,StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import { Context as AuthContext} from '../redux/authContext';


const LogOut = () => {
    const {logOut} = useContext(AuthContext);
    return (
    <View style={styles.background}>
<TouchableOpacity onPress={logOut}>
        <Text style={styles.logOutLink}>Log Out</Text>
</TouchableOpacity>    
    </View>
    )};

const styles = StyleSheet.create({
    logOutLink: {
        fontSize:13,
        fontFamily: 'Cochin',
        alignSelf: 'center',
        marginTop: 11,
        color: 'white'
    },
    background: {
        backgroundColor: 'red',
        height: 40,
        borderRadius: 10,
        marginHorizontal:19,
        borderWidth: 1,
        marginBottom: 20
    }
});

export default LogOut