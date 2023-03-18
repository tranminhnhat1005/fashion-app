// In App.js in a new project

import { ThemeProvider } from '@shopify/restyle';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { LoadAssets } from './src/components';
import theme from './src/components/Theme';
import { AuthenticationNavigator, assets as authenticationAssets } from './src/screens/Authentication/';

const assets = [...authenticationAssets];
const fonts = {
    'SFProDisplay-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
    'SFProDisplay-Semibold': require('./assets/fonts/SF-Pro-Display-Semibold.otf'),
    'SFProDisplay-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
    'SFProDisplay-Medium': require('./assets/fonts/SF-Pro-Display-Medium.otf'),
};

function App() {
    return (
        <ThemeProvider {...{ theme }}>
            <LoadAssets {...{ fonts, assets }}>
                <SafeAreaProvider>
                    <AuthenticationNavigator />
                </SafeAreaProvider>
            </LoadAssets>
        </ThemeProvider>
    );
}

export default App;
