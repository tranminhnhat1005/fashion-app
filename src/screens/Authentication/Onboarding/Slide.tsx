import React from 'react';
import { Dimensions, Image, ImageRequireSource, StyleSheet, View } from 'react-native';

import { Text } from '../../../components';
const { width, height } = Dimensions.get('window');
export const SLIDE_HEIGHT = height * 0.61;
export const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
    viewContainer: {
        width,
    },
    viewUnderlay: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'flex-end',
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
    picture: {
        uri: ImageRequireSource;
        width: number;
        height: number;
    };
    right?: boolean;
}

const Slide = ({ title, picture, right }: SlideProps) => {
    const transform = [
        { translateY: (SLIDE_HEIGHT - 100) / 2 },
        { translateX: ((right ? 1 : -1) * (width - 100)) / 2 },
        { rotate: right ? '-90deg' : '90deg' },
    ];
    return (
        <View style={styles.viewContainer}>
            <View style={styles.viewUnderlay}>
                <Image
                    source={picture.uri}
                    style={{
                        height: SLIDE_HEIGHT - BORDER_RADIUS,
                        width: ((SLIDE_HEIGHT - BORDER_RADIUS) * picture.height) / picture.width,
                    }}
                    resizeMode={'contain'}
                />
            </View>
            <View style={[styles.viewLabelContainer, { transform }]}>
                <Text variant={'verticalTitle'}>{title}</Text>
            </View>
        </View>
    );
};

export default Slide;
