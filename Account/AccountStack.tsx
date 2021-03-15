import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react'
import { Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../Authorization/AuthProvider';
import { Center } from '../Center';

interface AccountStackProps {}

const Stack = createStackNavigator();

function AccountView(){
    return (
        <Center>
            <Text>Update your account settings!</Text>
        </Center>
    )
}

export const AccountStack: React.FC<AccountStackProps> = ({}) => {
    const { logout } = useContext(AuthContext);
    return (
        <Stack.Navigator>
        <Stack.Screen name = "AccountView" component = {AccountView}
            options={{
                headerTitle: "Account",
                headerRight: () => {
                    return(

                        <TouchableOpacity
                        onPress={()=> {
                            logout();
                        }}
                        >
                            <Text>Log out</Text>
                        </TouchableOpacity>
                );
            }
        }} 
        />
    </Stack.Navigator>
        )
}