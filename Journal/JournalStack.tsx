import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { AuthContext } from '../Authorization/AuthProvider';
import { Center } from '../Center';

interface JournalStackProps {

}

const Stack = createStackNavigator();

function Feed(){
    return (
        <Center>
            <Text>Journal Screen</Text>
        </Center>
    )
}

export const JournalStack: React.FC<JournalStackProps> = ({}) => {
    const { logout } = useContext(AuthContext);
    return (
        <Stack.Navigator>
        <Stack.Screen name = "Feed" component = {Feed}
            options={{
                headerTitle: "Journal",
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