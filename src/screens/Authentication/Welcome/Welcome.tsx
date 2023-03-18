import React from 'react';
import { Dimensions, Image } from 'react-native';
import { Box, Button, Text, theme } from '../../../components';
import { Routes, StackNavigationProps } from '../../../components/Navigation';
import picture from '../../../../assets/data/welcome';

const { height } = Dimensions.get('window');
export const SLIDE_HEIGHT = height * 0.5;
export const assets = [picture.uri];

// const styles = StyleSheet.create({});

const Welcome = ({ navigation }: StackNavigationProps<Routes, 'Welcome'>) => {
    return (
        <Box flex={1}>
            <Box flex={1} backgroundColor={'white'}>
                <Box
                    flex={1}
                    borderBottomRightRadius={'xl'}
                    backgroundColor={'gray'}
                    alignItems={'center'}
                    justifyContent={'flex-end'}
                >
                    <Image
                        source={picture.uri}
                        style={{
                            height: SLIDE_HEIGHT - theme.borderRadii.xl,
                            width: ((SLIDE_HEIGHT - theme.borderRadii.xl) * picture.height) / picture.width,
                        }}
                        resizeMode={'contain'}
                    />
                </Box>
            </Box>
            <Box flex={1} backgroundColor={'gray'}>
                <Box
                    flex={1}
                    borderTopLeftRadius={'xl'}
                    backgroundColor={'white'}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    padding={'xl'}
                >
                    <Text variant={'title2'} textAlign={'center'}>
                        Let's get started
                    </Text>
                    <Text variant={'body'} textAlign={'center'}>
                        Login to your account below or sign up for amazing experience
                    </Text>
                    <Button
                        onPress={() => {
                            navigation.navigate('Login');
                        }}
                        variant={'primary'}
                        label={'Have an account? Login'}
                    />
                    <Button onPress={() => {}} label={`Join us, it's free`} />
                    <Button
                        onPress={() => {
                            navigation.goBack();
                        }}
                        variant={'transparent'}
                        label={'Forgot password?'}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Welcome;
