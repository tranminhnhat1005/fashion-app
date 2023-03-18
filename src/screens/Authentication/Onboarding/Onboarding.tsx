import React, { useRef } from 'react';
import {
    Animated,
    Dimensions,
    NativeScrollEvent,
    NativeSyntheticEvent,
    ScrollView,
    StyleSheet,
    View,
    Image,
} from 'react-native';

import Slide, { SLIDE_HEIGHT } from './Slide';
import SubSlide from './SubSlide';
import Dot from './Dot';
import slides from '../../../../assets/data/slides';
import { theme } from '../../../components';
import { Routes, StackNavigationProps } from '../../../components/Navigation';

export const assets = slides.map((slide) => slide.picture.uri);
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    viewSlider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: theme.borderRadii.xl,
    },
    viewUnderlay: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderBottomRightRadius: theme.borderRadii.xl,
        overflow: 'hidden',
    },
    viewPagination: {
        ...StyleSheet.absoluteFillObject,
        height: theme.borderRadii.xl,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewFooter: {
        flex: 1,
    },
    viewFooterContent: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: theme.borderRadii.xl,
    },
});

// type Props = {};

const Onboarding = ({ navigation }: StackNavigationProps<Routes, 'Onboarding'>) => {
    const scroll = useRef<ScrollView>(null);
    const x = useRef(new Animated.Value(0)).current;
    const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        x.setValue(e.nativeEvent.contentOffset.x);
    };
    const backgroundColor = x.interpolate({
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map((slide) => slide.color),
    });

    return (
        <View style={styles.viewContainer}>
            <Animated.View style={[styles.viewSlider, { backgroundColor }]}>
                {slides.map(({ picture }, index) => {
                    const opacity = x.interpolate({
                        inputRange: [(index - 0.5) * width, index * width, (index + 0.5) * width],
                        outputRange: [0, 1, 0],
                        extrapolate: 'clamp',
                    });
                    return (
                        <Animated.View style={[styles.viewUnderlay, { opacity }]} key={index}>
                            <Image
                                source={picture.uri}
                                style={{
                                    height: SLIDE_HEIGHT - theme.borderRadii.xl,
                                    width: ((SLIDE_HEIGHT - theme.borderRadii.xl) * picture.height) / picture.width,
                                }}
                                resizeMode={'contain'}
                            />
                        </Animated.View>
                    );
                })}
                <Animated.ScrollView
                    ref={scroll}
                    horizontal
                    snapToInterval={width}
                    decelerationRate={'fast'}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    scrollEventThrottle={1}
                    {...{ onScroll }}
                >
                    {slides.map(({ title, picture }, index) => (
                        <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.viewFooter}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }} />
                <View style={styles.viewFooterContent}>
                    <View style={styles.viewPagination}>
                        {slides.map((_, index) => (
                            <Dot key={index} currentIndex={Animated.divide(x, width)} {...{ index }} />
                        ))}
                    </View>
                    <Animated.View
                        style={{
                            flex: 1,
                            width: slides.length * width,
                            flexDirection: 'row',
                            transform: [{ translateX: Animated.multiply(x, -1) }],
                        }}
                    >
                        {slides.map(({ subtitle, description }, index) => {
                            const last = index === slides.length - 1;
                            return (
                                <SubSlide
                                    key={index}
                                    onPress={() => {
                                        if (last) {
                                            navigation.navigate('Welcome');
                                        } else {
                                            scroll.current?.scrollTo({ x: width * (index + 1), animated: true });
                                        }
                                    }}
                                    {...{ subtitle, description, last }}
                                />
                            );
                        })}
                    </Animated.View>
                </View>
            </View>
        </View>
    );
};

export default Onboarding;
