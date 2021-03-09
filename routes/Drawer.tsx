import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { MeStack } from '../MeStack';
import { SettingStack } from './SettingStack';

interface DrawerProps {

}
const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: MeStack,
    },
    Settings: {
        screen: SettingStack,
    }
})

export default createStackNavigator();