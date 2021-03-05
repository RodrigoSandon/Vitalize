import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Button, Text } from 'react-native';
import { AuthNavProps, AuthParamList } from './AuthParamList';
import { AuthContext } from './AuthProvider';
import { Center } from './Center';

interface AuthStackProps {

}
const Stack = createStackNavigator<AuthParamList>();

function Login({navigation, route}: AuthNavProps<'Login'>){ 
    const {login} = React.useContext(AuthContext)
        //new component called register
        //Register is the route that it's currently on
        
    return(
        <Center>
            <Text>This is the {route.name} page</Text>
            <Button
            title="log me in"
            onPress={() =>{
                login();
            }}
            
            />
            <Button 
            title = "go to register page" 
            onPress={()=> {
                navigation.navigate('Register')
                //navigation.goBack() /*explicit on way we want to navigate*/
            }}
            />
        </Center>
    )
}
function Register({navigation, route}: 
    AuthNavProps<'Register'>){ 
        //new component called register
        //Register is the route that it's currently on
        
    return(
        <Center>
            <Text>This is the {route.name} page</Text>
            <Button 
            title = "go to login page" 
            onPress={()=> {
                navigation.navigate('Login')
                //navigation.goBack() /*explicit on way we want to navigate*/
            }}
            />
        </Center>
    )
}
export const AuthStack: React.FC<AuthStackProps> = ({}) => {
        return (
            <Stack.Navigator 
            screenOptions={{
                header: () => null
            }}
                initialRouteName='Login'>
                <Stack.Screen 
                name="Login" //AuthParam will make sure we have the right keys
                options={{
                    headerTitle: "Sign in"
                    //header: ()=> null
                }} 
                component= {Login} 
                />

                <Stack.Screen 
                name="Register" 
                options={{
                    headerTitle: "Sign up"
                    //header: ()=> null
                }} 
                component= {Register} 
                />

            </Stack.Navigator>
        )
}