import createDataContext from './createDataContext';
import mainApi from '../api/apiConnection';
import AsyncStorage from '@react-native-community/async-storage';
import {NativeModules} from 'react-native';
import {navigate} from '../components/navigationRef'

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return{...state, errorMessage: action.payload};
        case 'add_error2':
            return{...state, errorMessage2: action.payload};
        case 'signUp':
            return{errorMessage:'', token:action.payload};
        case 'signIn':
            return{errorMessage2: '', token:action.payload};
        case 'clearError':
            return{...state, errorMessage: '',  errorMessage2: ''};
        case 'logOut':
            return{token:null, errorMessage: '',  errorMessage2: ''}
        default:
            return state;
    }
};

const StripeBridge = NativeModules.StripeBridge;

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({type: 'signIn', payload: token});
        navigate('Products')
    } else {
        navigate('SignUp')
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clearError'});
}



const signUp = dispatch => async ({firstName, lastName, email, password, telephoneNumber, ccNumber,month,year,cvc}) => {
        try {
            const response =  await mainApi.post('/signup',{firstName, lastName, email, password, telephoneNumber,ccNumber,month,year,cvc});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signUp', payload: response.data.token});
            fetch('http://localhost:5000/createStripePaymentIntent',
             'https://luxuryvipservices-90825.firebaseio.com/signUp.json',{
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json' },
            body: JSON.stringify({firstName, lastName, email, password, telephoneNumber, ccNumber,month,year,cvc}) })

            StripeBridge.createPayment(
                responseJson.setupIntentId,
                ccNumber,
                month,
                year,
                cvc,
                (err, res, payment_method) => {
                  if (res == 'SUCCESS') {
                    return 'Thank you for your payment'
                  }
                },
              );
            navigate('Products');
        } catch(err){
            dispatch({type: 'add_error', payload: 'Email already in use, please use another email.'})
        }
    };

const login = (dispatch) => async ({ email, password }) => {
        try {
            const response =  await mainApi.post('/signin',{ email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signIn', payload: response.data.token})
            navigate('Products');
        } catch(err){
            dispatch({type: 'add_error2', payload: 'Email and/or password do not match.'})
        }
    };

const reset = (dispatch) => {
    return ()=> {

    }
}

const logOut = (dispatch) => async () => {
await AsyncStorage.removeItem('token');
dispatch({type:'logOut'})
navigate('Login')
};


export const {Provider, Context} = createDataContext(
    authReducer,
    {signUp,login,logOut,clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage:"", errorMessage2:"" }
);