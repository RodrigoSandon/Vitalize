import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppTabsProps } from './AppTabsProps';
import { DrawerParamList } from './DrawerParamList';
import { Feather, MaterialIcons, FontAwesome5, Ionicons}from '@expo/vector-icons';

interface AppDrawerProps {}

const Drawer = createDrawerNavigator<DrawerParamList>()

export const AppDrawer: React.FC<AppDrawerProps> = ({}) => {
  return (
      
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Account') {
            iconName = 'account-circle';
            return <MaterialIcons name="account-circle" size={24} color="black" />;
          } else if (route.name === 'Privacy') { //keeping it at else if bc maybe more additions
              iconName = 'privacy-tip';
              return <MaterialIcons name="privacy-tip" size={24} color="black" />;
          } else if (route.name === 'InviteFriends') { //keeping it at else if bc maybe more additions
              iconName = 'user-friends';
              return <FontAwesome5 name="user-friends" size={24} color="black" />;
          } else if (route.name === 'Notifications') { //keeping it at else if bc maybe more additions
              iconName = 'notifications';
              return <Ionicons name="notifications" size={24} color="black" />;
          } else if (route.name === 'Settings') { //keeping it at else if bc maybe more additions
              iconName = 'ios-information-circle';
              return <Feather name="settings" size={24} color="black" />;
          }
          // You can return any component that you like here!
        }
      })}
    >
      <Drawer.Screen name="Account" component={AppTabsProps} />
      <Drawer.Screen name="Privacy" component={AppTabsProps} />
      <Drawer.Screen name="InviteFriends" component={AppTabsProps} />
      <Drawer.Screen name="Notifications" component={AppTabsProps} />
      <Drawer.Screen name="Settings" component={AppTabsProps} />
    </Drawer.Navigator>

  )
}
