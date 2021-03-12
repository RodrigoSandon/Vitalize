import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext, Component} from 'react'
import { Text, TouchableOpacity , View, StyleSheet, Button} from 'react-native';
import { AuthContext } from '../Authorization/AuthProvider';
import { Center } from '../Center';

interface MeStackProps {

}
const Stack = createStackNavigator();

function Feed(){
    return (
        
        <Center>
            <Text>Me Screen</Text>
        </Center>
    )
}

export const MeStack: React.FC<MeStackProps> = ({}) => {
    const { logout } = useContext(AuthContext);
    return (
    <Stack.Navigator>
        <Stack.Screen name = "Feed" component = {Feed}
            options={{
                headerTitle: "Me",
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

export default MeStack;