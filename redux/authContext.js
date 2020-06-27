import createContext from './createContext';

const authReducer = (state, action) => {
    switch (action.type){
        default:
            return state;
    }
};


export const {Provider, Context} = createContext(
    authReducer,
    {},
    {isSignedIn: false}
);