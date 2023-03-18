import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Box } from './Theme';

export const assets = [require('./assets/patterns/1.jpg')];
const { width } = Dimensions.get('window');
const aspectRatio = 2000 / 3000;
const height = width * aspectRatio;
const styles = StyleSheet.create({
    imgPatternTop: {
        width,
        height,
    },
    imgPatternBottom: {
        width,
        height,
        ...StyleSheet.absoluteFillObject,
    },
});

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {
    const { bottom } = useSafeAreaInsets();
    return (
        <Box flex={1} backgroundColor={'secondary'}>
            <StatusBar style={'dark'} />
            <Box backgroundColor={'white'}>
                <Box height={height * 0.61} overflow={'hidden'} borderBottomLeftRadius={'xl'}>
                    <Image source={assets[0]} style={styles.imgPatternTop} />
                </Box>
            </Box>
            <Box flex={1} overflow={'hidden'}>
                <Image source={assets[0]} style={styles.imgPatternBottom} />
                <Box flex={1} borderRadius={'xl'} backgroundColor={'white'} style={{ borderTopLeftRadius: 0 }}>
                    {children}
                </Box>
            </Box>
            <Box backgroundColor={'secondary'} paddingTop={'m'}>
                {footer}
                <Box height={bottom} />
            </Box>
        </Box>
    );
};

export default Container;
