import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../../components/Navigation';
import Onboarding, { assets as onboardingAssets } from './Onboarding';
import Welcome, { assets as welcomeAssets } from './Welcome';
import Login from './Login';
export { default as Onboarding } from './Onboarding';
export { default as Welcome } from './Welcome';
export const assets = [...onboardingAssets, ...welcomeAssets];

const AuthenticationStack = createNativeStackNavigator<Routes>();

export const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
            <AuthenticationStack.Screen name="Welcome" component={Welcome} />
            <AuthenticationStack.Screen name="Login" component={Login} />
        </AuthenticationStack.Navigator>
    );
};
