import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react'
import { Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../Authorization/AuthProvider';
import { Center } from '../Center';

interface SettingsStackProps {

}

const Stack = createStackNavigator();

function SettingsView(){
    return (
        <Center>
            <Text>Adjust your general settings!</Text>
        </Center>
    )
}

export const SettingsStack: React.FC<SettingsStackProps> = ({}) => {
    const { logout } = useContext(AuthContext);
    return (
        <Stack.Navigator>
        <Stack.Screen name = "SettingsView" component = {SettingsView}
            options={{
                headerTitle: "Settings",
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