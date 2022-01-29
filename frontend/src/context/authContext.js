import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    let [authState, setAuthState] = useState({
        username: null,
        isAuthenticated: false
    });

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const user = await fetch('/api/user-info');
                const {username} = await user.json();
                // console.log('User.status: ' + user.status);
                // const {username} = result;
                // console.table('Username: ' + username);
                if(user.status === 200){
                    setAuthState(Object.assign({}, {username: username},{isAuthenticated: true}));
                    navigate("/dashboard");
                }
                console.log(authState);
            }
            catch (error) {
                console.log(error);
            }
        }
        getUserInfo();
    }, [authState.username])

    const setAuthInfo = ({ username }) => {
        setAuthState({
            username,
            isAuthenticated: username ? true : false
        });
    }

    const logout = async () => {
        try {
            await fetch('/api/logout', {
                method: 'POST'
            });

            setAuthState({
                username: {},
                isAuthenticated: false
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
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

export { AuthContext, AuthProvider };