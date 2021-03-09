import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '/Volumes/T7Touch/Vitalize_App_Official/AuthProvider';
import { Center } from '/Volumes/T7Touch/Vitalize_App_Official/Center';
import {MeStack} from '../MeStack';

interface SettingStackProps{

}

const Stack = createStackNavigator();


export const SettingStack: React.FC<SettingStackProps> = ({}) => {
    const { logout } = useContext(AuthContext);
    return (
    <Stack.Navigator>
    </Stack.Navigator>

        )
}