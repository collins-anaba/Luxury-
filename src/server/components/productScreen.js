import React from 'react';
import { StyleSheet,TouchableOpacity, View ,Text} from 'react-native';
import {ListItem,Card} from 'react-native-elements';
import {FontAwesome, Entypo, FontAwesome5, Ionicons} from '@expo/vector-icons';
import Spacer from './spacer';


const products = [
{name: 'Catch these hands massage',
avatar_url:'',
subtitle: 'massage'
},
{name: 'Luxury Vehicle Detailing',
avatar_url:'',
subtitle: 'detailing'
},
{name: 'Luxury Lawn care',
avatar_url:'',
subtitle: 'commercial lawn care'
},
{name: 'Luxury Pharmacy',
avatar_url:'',
subtitle: 'pharmaceuticals'
},
{name: 'Luxury Credit Repair',
avatar_url:'',
subtitle: 'personal finances'
},
{name: 'Luxury Clips with New York',
avatar_url:'',
subtitle: 'Men Grooming'
},
{name: 'Luxury brokerage with Saks',
avatar_url:'',
subtitle: 'Real Estate'
},
{name: 'Luxury Personal Training',
avatar_url:'',
subtitle: 'Fitness'
},
{name: 'Luxury Private Flights with YalaJets',
avatar_url:'',
subtitle: 'Aviation'
},
]

const ProductScreen = () => {

    return ( 
<Card>
 <View style={Styles.spacing}>
    <TouchableOpacity>
    <View style={Styles.background}>
    <FontAwesome name='car' size={24} style={Styles.icons}/>
    <Text style={Styles.name}>Luxury Vehicle Detailing</Text>
    </View>
    </TouchableOpacity>
        <Spacer/>
    <TouchableOpacity>
    <View style={Styles.background}>
    <Entypo name='flower' size={24} style={Styles.icons}/>
    <Text style={Styles.name}>Luxury Commercial Lawn Care</Text>
    </View>
    </TouchableOpacity>
        <Spacer/>
    <TouchableOpacity>
    <View style={Styles.background}>
    <FontAwesome5 name='pills' size={24} style={Styles.icons}/>
    <Text style={Styles.name}>Luxury Pharmaceuticals</Text>
    </View>
    </TouchableOpacity>
        <Spacer/>
    <TouchableOpacity>
    <View style={Styles.background}>
    <Entypo name='credit-card' size={24} style={Styles.icons}/>
    <Text style={Styles.name}>Luxury Credit Repair</Text>
    </View>
    </TouchableOpacity>
        <Spacer/>
    <TouchableOpacity>
    <View style={Styles.background}>
    <Ionicons name='md-fitness' size={24} style={Styles.icons}/>
    <Text style={Styles.name}>Luxury Personal Fitness</Text>
    </View>
    </TouchableOpacity>
        <Spacer/>
    <TouchableOpacity>
    <View style={Styles.background}>
    <Entypo name='home' size={24} style={Styles.icons}/>
    <Text style={Styles.name}>Luxury Brokerage with Saks</Text>
    </View>
    </TouchableOpacity>
        <Spacer/>
    <TouchableOpacity>
    <View style={Styles.background}>
    <Entypo name='hand' size={24} style={Styles.icons}/>
    <Text style={Styles.name}>Luxury Massage with Catch These Hands</Text>
    </View>
    </TouchableOpacity>
        <Spacer/>
    <TouchableOpacity>
    <View style={Styles.background}>
    <FontAwesome name='scissors' size={24} style={Styles.icons}/>
    <Text style={Styles.name}>Luxury Grooming with New York</Text>
    </View>
    </TouchableOpacity>
        <Spacer/>
    <TouchableOpacity>
    <View style={Styles.background}>
    <Entypo name='scissors' size={24} style={Styles.icons}/>
    <Text style={Styles.name}>Luxury Private Flights with Yala Jets</Text>
    </View>
    </TouchableOpacity>
</View>
        </Card>

    )
};

const Styles = StyleSheet.create({
    background: {
        backgroundColor: '#d3d3d3',
        height: 80,
        borderRadius: 10,
        marginHorizontal:19,
        borderWidth: 1,
        shadowRadius:3,
        shadowColor: 'black'
    },
    name: {
        fontSize: 15,
        fontStyle: ('new times roman', 'italic'),
        alignSelf: 'center'
        
    },
    icons:{
        paddingLeft:5,
        paddingTop: 5
    }

})

export default ProductScreen;