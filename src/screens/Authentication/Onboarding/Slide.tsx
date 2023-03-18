import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { Text } from '../../../components';
const { width, height } = Dimensions.get('window');
export const SLIDE_HEIGHT = height * 0.61;

const styles = StyleSheet.create({
    viewContainer: {
        width,
    },
    viewLabelContainer: {
        height: 100,
        justifyContent: 'center',
    },
    txtLabel: {
        fontSize: 80,
        lineHeight: 80,
        fontFamily: 'SFProDisplay-Bold',
        color: 'white',
        textAlign: 'center',
    },
});

interface SlideProps {
    title: string;
    right?: boolean;
}

const Slide = ({ title, right }: SlideProps) => {
    const transform = [
        { translateY: (SLIDE_HEIGHT - 100) / 2 },
        { translateX: ((right ? 1 : -1) * (width - 100)) / 2 },
        { rotate: right ? '-90deg' : '90deg' },
    ];
    return (
        <View style={styles.viewContainer}>
            <View style={[styles.viewLabelContainer, { transform }]}>
                <Text variant={'verticalTitle'}>{title}</Text>
            </View>
        </View>
    );
};

export default Slide;
