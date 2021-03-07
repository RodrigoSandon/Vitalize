import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from './AppParamList';
import { Button, Text, StyleSheet } from 'react-native';
import { Center } from './Center';
import { AuthContext } from './AuthProvider';
import { Ionicons, FontAwesome5, Entypo, MaterialCommunityIcons}from '@expo/vector-icons';
import { Image } from 'react-native';
import { MeditateStack } from './MeditateStack';
import { MeStack } from './MeStack';
import { JournalStack } from './JournalStack';

interface AppTabsPropsProps {}

const Tabs = createBottomTabNavigator<AppParamList>()

export const AppTabsProps: React.FC<AppTabsPropsProps> = ({}) => {
        return (
            <Tabs.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Me') {
                    /*we check what the route is and assign what we want the string to be*/
                    iconName = 'ios-information-circle';
                    return <FontAwesome5 name="smile-beam" size={24} color="black" />
                  } else if (route.name === 'Meditate') {
                    iconName = 'ios-list-box';
                    return <MaterialCommunityIcons name="meditation" size={24} color="black" />;
                  } else if (route.name === 'Journal'){
                    iconName = 'ios-list-box';
                  }
      
                  // You can return any component that you like here!
                  return <Entypo name="open-book" size={24} color="black" />;
                }
              })}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              }}
            >
              <Tabs.Screen name="Me" component={MeStack} /> 
              <Tabs.Screen name="Meditate" component={MeditateStack}/>
              <Tabs.Screen name="Journal" component={JournalStack}/>
            </Tabs.Navigator>

        )
}
