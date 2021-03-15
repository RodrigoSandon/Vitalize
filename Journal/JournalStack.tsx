import { createStackNavigator, Header } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { AuthContext } from '../Authorization/AuthProvider';
import { Center } from '../Center';

interface JournalStackProps {

}

const Stack = createStackNavigator();

function JournalView(){
    return (
        <Center>
            <Text>Journal Screen</Text>
        </Center>
        
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
        resizeMode: "contain",
        justifyContent: "center",
        height: '100%',
        width: '100%'
    },
});

function LogoTitle() {
    return (
        <Image source={require('../assets/clouds_header.jpg')} 
        style={styles.image} />
    );
}

interface props {
    props: boolean;
    // etc...
}

export const JournalStack: React.FC<JournalStackProps> = ({}) => {
    const { logout } = useContext(AuthContext);
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
      <Stack.Screen
        name="JournalView"
        component={JournalView}
        options={{ title: "Journal",
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