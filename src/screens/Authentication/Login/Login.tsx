import { StyleSheet } from 'react-native';
import React from 'react';
import { Box, Button, Container, Text } from '../../../components';
import SocialLogin from './SocialLogin';

const styles = StyleSheet.create({});

type Props = {};

const Login = (props: Props) => {
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
            <Text>Nak</Text>
        </Container>
    );
};

export default Login;
