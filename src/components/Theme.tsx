import { createBox, createText, createTheme } from '@shopify/restyle';

const palette = {
    purpleLight: '#8C6FF7',
    purplePrimary: '#5A31F4',
    purpleDark: '#3F22AB',

    greenLight: '#56DCBA',
    greenPrimary: '#0ECD9D',
    greenDark: '#0A906E',

    black: '#0B0B0B',
    white: '#FFFFFF',
    titleDark: '#0C0D34',
    secondary: '#0C0D34',
    bodyDark: 'rgba(12, 13, 52, 0.7)',
    bodyLight: 'rgba(12, 13, 52, 0.05)',
    primary: '#2CB9B0',
    gray: '#F4F0EF',
    grayDark: '#8A8D90',
    danger: '#FF0058',
};

const theme = createTheme({
    colors: {
        mainBackground: palette.white,
        cardPrimaryBackground: palette.purplePrimary,
        titleDark: palette.titleDark,
        bodyDark: palette.bodyDark,
        bodyLight: palette.bodyLight,
        white: palette.white,
        primary: palette.primary,
        gray: palette.gray,
        secondary: palette.secondary,
        grayDark: palette.grayDark,
        danger: palette.danger,
    },
    spacing: {
        xs: 8,
        s: 12,
        m: 16,
        l: 24,
        xl: 40,
    },
    borderRadii: {
        s: 4,
        m: 10,
        l: 22,
        xl: 75,
    },
    border: {},
    textVariants: {
        verticalTitle: {
            color: 'white',
            fontFamily: 'SFProDisplay-Bold',
            fontSize: 80,
            lineHeight: 80,
            textAlign: 'center',
        },
        title1: {
            color: 'titleDark',
            fontFamily: 'SFProDisplay-Semibold',
            fontSize: 28,
            textAlign: 'center',
        },
        title2: {
            color: 'titleDark',
            fontFamily: 'SFProDisplay-Semibold',
            fontSize: 24,
            lineHeight: 30,
            textAlign: 'center',
        },
        body: {
            color: 'bodyDark',
            fontFamily: 'SFProDisplay-Regular',
            fontSize: 16,
            lineHeight: 24,
        },
        button: {
            color: 'bodyDark',
            fontFamily: 'SFProDisplay-Medium',
            fontSize: 15,
        },
    },
});

export type Theme = typeof theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
Text.defaultProps = { variant: 'body' };

export default theme;
