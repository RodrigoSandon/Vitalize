import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type DrawerParamList = {
    Home: undefined;
    Account: undefined,
    Privacy: undefined,
    InviteFriends: undefined,
    Notifications: undefined, 
    Settings: undefined,  
}
//new prop for every param list
export type DrawerStackNavProps<T extends keyof DrawerParamList> = {
    navigation: StackNavigationProp<DrawerParamList, T>;
    route: RouteProp<DrawerParamList, T>;
};