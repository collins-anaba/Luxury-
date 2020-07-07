import createDataContext from './createDataContext';
import mainApi from '../api/apiConnection';
import AsyncStorage from '@react-native-community/async-storage';
// import {AsyncStorage} from 'react-native';
import {navigate} from '../components/navigationRef'

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return{...state, errorMessage: action.payload};
        case 'signUp':
            return{errorMessage:'', token:action.payload}
        default:
            return state;
    }
};

const signUp = dispatch => async ({firstName, lastName, email, password, telephoneNumber }) => {
        try {
            const response =  await mainApi.post('/signup',{firstName, lastName, email, password, telephoneNumber});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signUp', payload: response.data.token})
            navigate('Products');
        } catch(err){
            dispatch({type: 'add_error', payload: 'Email already in use, please use another email.'})
        }
    };

const login = (dispatch) => {
    return ({ email, password }) => {
    };
}

const logOut = (dispatch) => {
    return ()=> {

    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signUp,login,logOut},
    {token: null, errorMessage:""}
);