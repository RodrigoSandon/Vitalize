import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../Authorization/AuthProvider';
import { Center } from '../Center';
import { Image } from 'react-native';

interface MeStackProps {

}
const Stack = createStackNavigator();

function Feed(){
    return (
        <>
            <Center>
                <Image source={require('../assets/home_sunshine.jpg')} style={styles.image} />
            </Center>
            <Center>
                <Text>Me Screen</Text>
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
        resizeMode: "contain",
        justifyContent: "center",
        height: '100%',
        width: '100%'
    },
});

export const MeStack: React.FC<MeStackProps> = ({}) => {
    const { logout } = useContext(AuthContext);
    return (
    <Stack.Navigator>
        <Stack.Screen name = "Feed" component = {Feed}
            options={{
                header: () => null
        }} 
        />
    </Stack.Navigator>

        )
}

export default MeStack;