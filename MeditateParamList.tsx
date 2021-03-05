import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type MeditateParamList = {
    Feed: undefined;
    Favorite: {name: string};
}
//new prop for every param list
export type MeditateStackNavProps<T extends keyof MeditateParamList> = {
    navigation: StackNavigationProp<MeditateParamList, T>;
    route: RouteProp<MeditateParamList, T>;
};