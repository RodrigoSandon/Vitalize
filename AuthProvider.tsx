import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

type User = null | { username: string}

export const AuthContext = React.createContext<{
    user: User,
    login: () => void,
    logout: () => void
}>({
    user: null,
    login: () => {},
    logout: () => {}
});

interface AuthProviderProps {

}

//I wanna access the current user anywhere in the application
export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<User>(null);

    return <AuthContext.Provider value={{
        user,
        login: () => {
            const fakeUser = { username: "Rodrigo"};
            setUser(fakeUser);
            AsyncStorage.setItem("user", JSON.stringify(fakeUser)); //may throw exception
        },
        logout: () => {
            setUser(null);
            AsyncStorage.removeItem("user")
        }

    }}>{children}</AuthContext.Provider>;

}