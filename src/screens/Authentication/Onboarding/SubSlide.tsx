import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../../../components';

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    txtSubtitle: {
        fontFamily: 'SFProText-Semibold',
        fontSize: 24,
        lineHeight: 30,
        marginBottom: 12,
        color: '#0C0D34',
        textAlign: 'center',
    },
    txtDescription: {
        fontFamily: 'SFProText-Regular',
        fontSize: 16,
        lineHeight: 24,
        color: '#0C0D34',
        textAlign: 'center',
        marginBottom: 40,
    },
});

interface SubSlideProps {
    last?: boolean;
    subtitle: string;
    description: string;
    onPress: () => void;
}

const SubSlide = ({ last, subtitle, description, onPress }: SubSlideProps) => {
    const label = last ? "Let's get started" : 'Next';
    const variant = last ? 'primary' : 'default';
    return (
        <View style={styles.viewContainer}>
            <Text style={styles.txtSubtitle}>{subtitle}</Text>
            <Text style={styles.txtDescription}>{description}</Text>
            <Button {...{ label, variant, onPress }} />
        </View>
    );
};

export default SubSlide;
