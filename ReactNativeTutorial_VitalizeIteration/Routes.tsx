import * as React from 'react';
import {createStackNavigator, StackNavigationProp} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native"; //the provider, wrap it
import {View, Text, ActivityIndicator} from "react-native";
import { Center } from './Center';
import { Button } from 'react-native';
import { AuthNavProps, AuthParamList } from './AuthParamList';
import { RouteProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from './AuthProvider';
import { AppTabsProps } from './AppTabsProps';
import { AuthStack } from './AuthStack';

interface RoutesProps{}

//how to pass options to different routes
//but want to navigate without having to change the initialRouteName

//when page is first loaded, we dont know whether the user is logged in or not -> we need to do some
//kind of request to our server to see if the user is logged in

/*
This route component shows a loading spinner, while its loading and checks if AsyncStorage exists
and if it does, it logs the user in.
*/
export const Routes: React.FC<RoutesProps> = ({}) => {
    const {user, login} = React.useContext(AuthContext); //object that gives us access to user, logging in, and logging out
    const [loading, setLoading] = React.useState(true);

    //check if user is logged in or not
    React.useEffect(() => {
        AsyncStorage.getItem('user').then(userString =>{
            //if the user is logged on
            //setLoading(false);
            if (userString){
                login(); //we're faking it rn, will actually be an API call to our servers
            }
            setLoading(false);
        }).catch(err => {
            console.log(err);//when user not logged in like this, don't need to do anything
            //if user is not logged on, load screen
            //setLoading(true);
        });
    }, []);

    if (loading) { //loading indicator
        return (
            <Center>
                <ActivityIndicator size = 'large'/>
            </Center>
        )
    }
//i can render different stacks whether user is logged in or not
    return (//when user is logged in, tabs should show at the bottom (enter the home page)
     //render the AppTabsProps
        <NavigationContainer>
            {user ? <AppTabsProps/>:  <AuthStack/>}
            </NavigationContainer>
    );

};
//render routes