import createContext from './createContext';

const authReducer = (state, action) => {
    switch (action.type){
        default:
            return state;
    }
};

const signUp = (dispatch) => {
    return ({firstName, lastName, email, password, creditCardNumber, month, year, cvv}) => {
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