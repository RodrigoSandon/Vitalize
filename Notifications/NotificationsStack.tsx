import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react'
import { Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../Authorization/AuthProvider';
import { Center } from '../Center';

interface NotificationsStackProps {

}
const Stack = createStackNavigator();

function NotificationsView(){
    return (
        <Center>
            <Text>Adjust your notification settings!</Text>
        </Center>
    )
}

export const NotificationsStack: React.FC<NotificationsStackProps> = ({}) => {
    const { logout } = useContext(AuthContext);
    return (
        <Stack.Navigator>
        <Stack.Screen name = "NotificationsView" component = {NotificationsView}
            options={{
                headerTitle: "Notifications",
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