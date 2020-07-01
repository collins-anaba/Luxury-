import createDataContext from './createDataContext';
import mainApi from '../api/apiConnection';

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return{...state, errorMessage: action.payload};
        default:
            return state;
    }
};

const signUp = dispatch => {
    return async ({firstName, lastName, email, password, telephoneNumber }) => {
        try {
            const response =  await mainApi.post('/signup',{firstName, lastName, email, password, telephoneNumber});
            console.log(response.data)
        } catch(err){
            dispatch({type: 'add_error', payload: 'Email already in use, please use another email.'})
        }
    };
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
    {isSignedIn: false, errorMessage:""}
);