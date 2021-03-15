import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppTabs } from '../AppTabs';
import { DrawerParamList } from './DrawerParamList';
import { MaterialIcons, FontAwesome5, Ionicons, Entypo}from '@expo/vector-icons';
import { AccountStack } from '../Account/AccountStack';
import { PrivacyStack } from '../Privacy/PrivacyStack';
import { InviteFriendsStack } from '../InviteFriends/InviteFriendsStack';
import { NotificationsStack } from '../Notifications/NotificationsStack';
import { SettingsStack } from '../Settings/SettingsStack';

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
              iconName = 'ios-settings-sharp';
              return <Ionicons name="ios-settings-sharp" size={24} color="black" />;
          } else if (route.name === 'Home') { //keeping it at else if bc maybe more additions
            iconName = 'home';
            return <Entypo name="home" size={24} color="black" />;
        } 
          // You can return any component that you like here!
        }
      })}
    >
      <Drawer.Screen name="Home" component={AppTabs} />
      <Drawer.Screen name="Account" component={AccountStack} />
      <Drawer.Screen name="Privacy" component={PrivacyStack} />
      <Drawer.Screen name="InviteFriends" component={InviteFriendsStack} />
      <Drawer.Screen name="Notifications" component={NotificationsStack} />
      <Drawer.Screen name="Settings" component={SettingsStack} />
    </Drawer.Navigator>

  )
}
