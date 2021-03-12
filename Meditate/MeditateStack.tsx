import { StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Button, FlatList, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../Authorization/AuthProvider';
import { Center } from '../Center';
import faker from 'faker';
import { MeditateParamList, MeditateStackNavProps } from './MeditateParamList';
//Currently I can't get the navigation to go to another screen in favorites
interface MeditateStackProps {}

const Stack = createStackNavigator<MeditateParamList>();

function Feed({navigation}: MeditateStackNavProps<'Feed'>){
    return (
        <Center>
            <FlatList 
            style={{width: "100%"}}
            renderItem={({ item }) => {
                return <Button title={item} onPress={() => {
                    navigation.navigate('Favorite', {name: item});
                }}/>;
            }}
            keyExtractor={(product,idx) => product + idx}
            data={Array.from(Array(30), () => faker.commerce.product())}
            />
        </Center>
    )
}

function Favorite({navigation, route}: MeditateStackNavProps<'Favorite'>){ //usually you would want to fetch the id of the thing chosen
    return(
        <Center>
            <Text>Play Module?</Text> 
            <Button 
            title = "go back to feed" 
            onPress={()=> {
                navigation.navigate('Feed')
                //navigation.goBack() /*explicit on way we want to navigate*/
            }}
            />
        </Center>
    );
}

export const MeditateStack: React.FC<MeditateStackProps> = ({}) => { //to get the header, we pass in the function instead of an object
        const { logout} = useContext(AuthContext);
        return (
        <Stack.Navigator>
            
            <Stack.Screen name = "Feed" component = {Feed}
                options={{
                    headerTitle: "Meditate",
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
        <Stack.Screen name="Favorite" component={Favorite} 
                options={{
                    headerTitle: "Favorite Module",
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