import React from 'react';
import { Text,FlatList,StyleSheet,TouchableOpacity,Button } from 'react-native'


const ProductScreen = ({navigation}) => {
    console.log(navigation)

    const productList = [
        {name: 'luxury personal training with moefitness33', key: '1'},
        {name: 'luxury private jets with yalajets',  key: '2'},
        {name:'luxury Pharmaceutical', key: '3'},
        {name:'luxury massage with Catch these hands', key: '4'},
        {name: 'luxury lawn care',  key: '5'},
        {name: 'luxury brokerage with Saks', key: '6'},
        {name: 'luxury clips with New York', key: '7'},
        {name: 'luxury credit repair', key: '8'},
        {name: 'luxury credit repair', key: '9'},
    ]


    return ( 
    <View>
<Button onPress={()=> navigation.navigate("userDashboard")}/>
    <FlatList
    //key extractor keep tracks of keys for each object in flat list
    keyExtractor={(productList)=>{productList.name}}
    data={productList}
    renderItem={({item})=> {
    return <Text style={Styles.textStyle}>{item.name}</Text>
   }}
   />
    </View>


    )
};

const Styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20
    }

})

export default ProductScreen;