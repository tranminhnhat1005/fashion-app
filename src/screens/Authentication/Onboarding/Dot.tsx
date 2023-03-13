import { Animated, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({});

interface DotProps {
    index: number;
    currentIndex: Animated.AnimatedDivision<number>;
}

const Dot = ({ index, currentIndex }: DotProps) => {
    const opacity = currentIndex.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0.5, 1, 0.5],
        extrapolate: 'clamp',
    });
    const scale = currentIndex.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [1, 1.25, 1],
        extrapolate: 'clamp',
    });
    return (
        <Animated.View
            style={{
                width: 8,
                height: 8,
                margin: 4,
                borderRadius: 4,
                backgroundColor: '#2CB9C0',
                opacity,
                transform: [{ scale }],
            }}
        ></Animated.View>
    );
};

export default Dot;
