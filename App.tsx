// In App.js in a new project

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { LoadAssets } from './src/components';
import { Onboarding, Welcome } from './src/screens/Authentication/';
import { ThemeProvider } from '@shopify/restyle';
import theme from './src/components/Theme';

const fonts = {
    'SFProDisplay-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
    'SFProDisplay-Semibold': require('./assets/fonts/SF-Pro-Display-Semibold.otf'),
    'SFProDisplay-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
    'SFProDisplay-Medium': require('./assets/fonts/SF-Pro-Display-Medium.otf'),
};

const AuthenticationStack = createNativeStackNavigator();

const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
            <AuthenticationStack.Screen name="Welcome" component={Welcome} />
        </AuthenticationStack.Navigator>
    );
};

function App() {
    return (
        <ThemeProvider {...{ theme }}>
            <LoadAssets {...{ fonts }}>
                <AuthenticationNavigator />
            </LoadAssets>
        </ThemeProvider>
    );
}

export default App;
