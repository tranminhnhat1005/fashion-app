import React, { useRef } from 'react';
import {
    Animated,
    Dimensions,
    NativeScrollEvent,
    NativeSyntheticEvent,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';

import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from './Slide';
import SubSlide from './SubSlide';
import Dot from './Dot';
import slides from '../../../../assets/data/slides';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    viewSlider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: BORDER_RADIUS,
    },
    viewPagination: {
        ...StyleSheet.absoluteFillObject,
        height: BORDER_RADIUS,
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
        borderTopLeftRadius: BORDER_RADIUS,
    },
});

// type Props = {};

const Onboarding = () => {
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
                        {slides.map(({ subtitle, description }, index) => (
                            <SubSlide
                                key={index}
                                last={index === slides.length - 1}
                                {...{ subtitle, description }}
                                onPress={() => {
                                    if (scroll.current) {
                                        scroll.current.scrollTo({ x: width * (index + 1), animated: true });
                                    }
                                }}
                            />
                        ))}
                    </Animated.View>
                </View>
            </View>
        </View>
    );
};

export default Onboarding;
