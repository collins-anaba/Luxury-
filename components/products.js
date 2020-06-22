import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'


const Products = (props) => {
    const productList = [
        {name: 'luxury personal training with moefitness33'},
        {name: 'luxury private jets with yalajets'},
        {name:'luxury Pharmaceutical'},
        {name:'luxury massage with Catch these hands'},
        {name: 'luxury lawn care'},
        {name: 'luxury brokerage with Saks'},
        {name: 'luxury clips with New York'},
        {name: 'luxury credit repair'},
        {name: 'luxury credit repair'},


    ]
    return ( <FlatList
    data={productList}
    renderItem={({item})=> {
        return <Text>{item.name}</Text>
    }}/>

    )
};

export default Products;