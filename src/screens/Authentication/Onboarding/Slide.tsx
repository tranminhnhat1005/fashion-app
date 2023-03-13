import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');
export const SLIDE_HEIGHT = height * 0.61;

const styles = StyleSheet.create({
    viewContainer: {
        width,
    },
    viewUnderlay: {
        ...StyleSheet.absoluteFillObject,
        top: 70,
        justifyContent: 'flex-end',
    },
    imgUnderlay: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
    },
    viewLabelContainer: {
        height: 100,
        justifyContent: 'center',
    },
    txtLabel: {
        fontSize: 80,
        lineHeight: 80,
        fontFamily: 'SFProText-Bold',
        color: 'white',
        textAlign: 'center',
    },
});

interface SlideProps {
    title: string;
    picture: number;
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
                <Image source={picture} style={styles.imgUnderlay} resizeMode={'contain'} />
            </View>
            <View style={[styles.viewLabelContainer, { transform }]}>
                <Text style={styles.txtLabel}>{title}</Text>
            </View>
        </View>
    );
};

export default Slide;
