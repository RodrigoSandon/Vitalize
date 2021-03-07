import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View, Image, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
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
        <>
        <Center>
            <Image source={require('./assets/signInImage.jpg')} style={styles.image} />
        </Center>
        <Center>

            <SafeAreaView>
                <Text style={styles.vitalize}>Vitalize</Text>
                <Text style={styles.text}>
                A mindfulness app specifically tailored to{'\n'}
                clinicians like yourself
                </Text>
                <TouchableOpacity style={styles.appButtonContainer1}
                    
                    onPress={() => {
                        navigation.navigate('Register');
                        //navigation.goBack() /*explicit on way we want to navigate*/
                    } } >

                    <Text style={styles.appButtonText}>Sign up</Text>
                </TouchableOpacity>
                <View style={styles.space} />
                <TouchableOpacity style={styles.appButtonContainer2}
                    onPress={() => {
                        login();
                    } } > 
                
                    <Text style={styles.appButtonText}>Log In</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </Center>
        
            </>
        
        
        
    )
}

const styles = StyleSheet.create({
    text: {
        flex: .7,
        textAlign: 'center', 
    },
    vitalize: {
        fontWeight: '500',
        textAlign: "center",
        fontSize: 70,
        color: '#ADBAF9'
    },
    image: {
        flex: 1,
        resizeMode: "stretch",
        justifyContent: "center",
        height: '100%',
        width: '100%'
    },
    appButtonContainer1: {
        elevation: 8,
        backgroundColor: "#6F83E0",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
    appButtonContainer2: {
        elevation: 8,
        backgroundColor: "#E0E5FE",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center"
      },
      space: {
        width: 20,
        height: 20,
      },
});

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