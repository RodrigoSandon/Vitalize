import React from 'react'
import { AuthProvider } from './Authorization/AuthProvider'
import { Routes } from './Routes'
import { Dimensions } from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import {AppDrawer} from './Drawer/AppDrawer';
import { NavigationContainer } from '@react-navigation/native';

interface ProvidersProps {}

//<NavigationContainer>
               // <AppDrawer />
          //  </NavigationContainer>

export const Providers: React.FC<ProvidersProps> = ({}) => {
        return (
        <AuthProvider>
            <Routes />
            
        </AuthProvider>

        )
}