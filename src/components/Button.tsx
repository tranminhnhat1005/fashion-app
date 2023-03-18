import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Text, Theme } from './Theme';
import { useTheme } from '@shopify/restyle';
const styles = StyleSheet.create({
    viewContainer: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtLabel: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 15,
        textAlign: 'center',
    },
});

interface ButtonProps {
    label?: string;
    variant: 'primary' | 'default' | 'transparent';
    children?: ReactNode;
    onPress: () => void;
}

const Button = ({ label, variant, children, onPress }: ButtonProps) => {
    const theme = useTheme<Theme>();
    const backgroundColor =
        variant === 'primary'
            ? theme.colors.primary
            : variant === 'transparent'
            ? 'transparent'
            : theme.colors.bodyLight;
    const color = variant === 'primary' ? theme.colors.white : theme.colors.titleDark;
    return (
        <RectButton style={[styles.viewContainer, { backgroundColor }]} {...{ onPress }}>
            {children ? (
                children
            ) : (
                <Text variant={'button'} style={{ color }}>
                    {label}
                </Text>
            )}
        </RectButton>
    );
};

Button.defaultProps = { variant: 'default' };

export default Button;
