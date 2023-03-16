import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, Text } from '../../../components';

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    txtSubtitle: {
        marginBottom: 12,
    },
    txtDescription: {
        marginBottom: 40,
        textAlign: 'center',
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
            <Text variant={'title2'} style={styles.txtSubtitle}>
                {subtitle}
            </Text>
            <Text variant={'body'} style={styles.txtDescription}>
                {description}
            </Text>
            <Button {...{ label, variant, onPress }} />
        </View>
    );
};

export default SubSlide;
