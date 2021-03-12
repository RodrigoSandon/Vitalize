import React, {useContext} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../Authorization/AuthProvider';
import { Center } from '../Center';
import { DrawerParamList } from './DrawerParamList';
interface DrawerStackProps {}

const Stack = createStackNavigator<DrawerParamList>();

function Feed(){
    return (
        <Center>
            <Text>Setting Screen</Text>
        </Center>
    )
}

export const DrawerStack: React.FC<DrawerStackProps> = ({}) => {
    const { logout} = useContext(AuthContext);
    return (
            <Stack.Navigator>
                <Stack.Screen name = "Account" component = {Feed}
                    options={{
                        headerTitle: "Drawer",
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