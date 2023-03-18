import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface StackNavigationProps<ParamList extends ParamListBase, RouteName extends keyof ParamList = string> {
    navigation: NativeStackNavigationProp<ParamList, RouteName>;
    route: RouteProp<ParamList, RouteName>;
}

export type Routes = {
    Onboarding: undefined;
    Welcome: undefined;
    Login: undefined;
};
