import React, { useState, useEffect, createContext } from 'react';
// import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
    // const navigate = useNavigate();

    let [authState, setAuthState] = useState({
        userInfo: {},
        isAuthenticated: false
    });

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const user = await fetch('/api/user-info');
                const {userInfo} = await user.json();
                // console.log(typeof(userInfo));
                // console.log('User.status: ' + user.status);
                // const {username} = result;
                // console.table(userInfo);
                if(user.status === 200){
                    // console.log('within user.status===200')
                    setAuthState({
                        username: userInfo.username,
                        userInfo,
                        isAuthenticated: true,
                    });
                    // navigate("/dashboard", {replace: true});
                }
                // console.log(authState);
            }
            catch (error) {
                console.log(error);
                setAuthState({
                    username: null,
                    userInfo: {},
                    isAuthenticated: false
                });
            }
        }
        getUserInfo();
    }, []);

    const setAuthInfo = ({ userInfo }) => {
        setAuthState({
            userInfo,
            isAuthenticated: userInfo.username ? true : false
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