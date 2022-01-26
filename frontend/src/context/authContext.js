import React, {useState, createContext} from 'react';


const AuthContext = createContext();
const {Provider} = AuthContext;

const AuthProvider = ({children}) => {

    let [authState,setAuthState] = useState({
        userInfo: null,
        isAuthenticated: false
    });

    const setAuthInfo = ({userInfo}) => {
        setAuthState({
            userInfo,
            isAuthenticated: userInfo && userInfo._id ? true : false
        });
    }

    const logout = async () => {
        try{
            await fetch('/api/logout');

            setAuthState({
                userInfo: {},
                isAuthenticated: false
            });
        }catch(err){
            console.log(err);
        }
    }

    return(
        <Provider
            value={{
                authState,
                setAuthState: authInfo => setAuthInfo(authInfo),
                logout
            }}
        >
            {children}
        </Provider>
    );
};

export {AuthContext,AuthProvider};