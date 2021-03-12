import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

/*
Create a new type. Calling this stack auth stack because I have register and login. 
I will list screens and parameters they have.
*/ 
export type AuthParamList = {

    Login: undefined;
    Register: undefined;
}
//Takes a generic bc we dont know what the page is going to be, so pass T
//If we extend a key its either login or register
//create this for each stack that you create
export type AuthNavProps<T extends keyof AuthParamList> = {
    navigation: StackNavigationProp<AuthParamList, T>;
    route: RouteProp<AuthParamList, T>;
};