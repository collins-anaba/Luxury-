import React from 'react'
import {View,StyleSheet} from 'react-native';


export const Spacer = ({Children}) => {
return <View style={styles.spacer}>{Children}</View>
};

export const Spacer2 = ({Children}) => {
    return <View style={styles.spacer2}>{Children}</View>
    };

const styles = StyleSheet.create({
    spacer: {
        margin: 12
    },
    spacer2: {
        margin: 8
    }
});

