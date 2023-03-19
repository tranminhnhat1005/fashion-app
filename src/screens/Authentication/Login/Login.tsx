import { StyleSheet } from 'react-native';
import React from 'react';
import { Box, Button, Container, Text, TextInput } from '../../../components';
import SocialLogin from './SocialLogin';

const styles = StyleSheet.create({});

const emailValidator = (email: string) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
const passwordValidator = (password: string) => password.length >= 6;

type Props = {};

const Login = () => {
    const footer = (
        <>
            <SocialLogin />
            <Box alignItems={'center'}>
                <Button variant={'transparent'} onPress={() => alert('Sign Up!')}>
                    <Box flexDirection={'row'} justifyContent={'center'}>
                        <Text color={'white'}>Don't have an account?</Text>
                        <Text marginLeft={'xs'} color={'primary'}>
                            Sign Up here
                        </Text>
                    </Box>
                </Button>
            </Box>
        </>
    );
    return (
        <Container {...{ footer }}>
            <Box padding={'xl'}>
                <Text variant={'title1'} marginBottom={'m'}>
                    Welcome back
                </Text>
                <Text textAlign={'center'} marginBottom={'l'}>
                    Use your credentials below and login to your account
                </Text>
                <TextInput
                    icon={'mail'}
                    placeholder={'Enter your Email'}
                    validator={emailValidator}
                    inputMode={'email'}
                />
                <Box marginBottom={'m'} />
                <TextInput
                    icon={'lock'}
                    placeholder={'Enter your Password'}
                    validator={passwordValidator}
                    secureTextEntry
                />
            </Box>
        </Container>
    );
};

export default Login;
