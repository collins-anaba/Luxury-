import createContext from './createContext';
import mainApi from '../api/apiConnection';

const authReducer = (state, action) => {
    switch (action.type){
        default:
            return state;
    }
};

const signUp = (dispatch) => {
    return async ({firstName, lastName, email, password, telephoneNumber }) => {
        try {
            const response =  await mainApi.post('/signup',{firstName, lastName, email, password, telephoneNumber});
            console.log(response.data)
        } catch(err){
            console.log(err.message)
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

export const {Provider, Context} = createContext(
    authReducer,
    {signUp,login,logOut},
    {isSignedIn: false}
);