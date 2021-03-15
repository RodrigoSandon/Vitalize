import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react'
import { Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../Authorization/AuthProvider';
import { Center } from '../Center';

interface PrivacyStackProps {}

const Stack = createStackNavigator();

function PrivacyView(){
    return (
        <Center>
            <Text>Check out our privacy policy!</Text>
        </Center>
    )
}

export const PrivacyStack: React.FC<PrivacyStackProps> = ({}) => {
    const { logout } = useContext(AuthContext);
    return (
        <Stack.Navigator>
        <Stack.Screen name = "PrivacyView" component = {PrivacyView}
            options={{
                headerTitle: "Privacy",
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