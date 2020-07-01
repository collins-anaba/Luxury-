import React from 'react'
import {View,StyleSheet, Button} from 'react-native';
import {Text, Card} from 'react-native-elements';



const LawnCare = ({Children}) => {
return <View>
<Card>
    <Text>Lawn Care</Text>
    <Button title='Enter'></Button>
</Card>
</View>
};

const styles = StyleSheet.create({
    spacer: {
        margin: 12
    }
});

export default LawnCare;