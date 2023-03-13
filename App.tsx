// In App.js in a new project

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { LoadAssets } from './src/components';
import Onboarding from './src/screens/Authentication/Onboarding';

const fonts = {
    'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
    'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
    'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
};

const AuthenticationStack = createNativeStackNavigator();

const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthenticationStack.Screen name="Home" component={Onboarding} />
        </AuthenticationStack.Navigator>
    );
};

function App() {
    return (
        <LoadAssets {...{ fonts }}>
            <AuthenticationNavigator />
        </LoadAssets>
    );
}

export default App;
