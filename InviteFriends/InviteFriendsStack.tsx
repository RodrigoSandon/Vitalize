import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react'
import { Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../Authorization/AuthProvider';
import { Center } from '../Center';

interface InviteFriendsStackProps {

}
const Stack = createStackNavigator();

function InviteFriendsView(){
    return (
        <Center>
            <Text>Let your friends know!</Text>
        </Center>
    )
}

export const InviteFriendsStack: React.FC<InviteFriendsStackProps> = ({}) => {
    const { logout } = useContext(AuthContext);
    return (
        <Stack.Navigator>
        <Stack.Screen name = "InviteFriendsView" component = {InviteFriendsView}
            options={{
                headerTitle: "Invite Friends",
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