import React from 'react';
import { Box } from '../../../components';
import SocialIcon from '../../../components/SocialIcon';

const SocialLogin = () => {
    return (
        <Box flexDirection={'row'} justifyContent={'center'}>
            <SocialIcon name={'Apple'} />
            <SocialIcon name={'Facebook'} />
            <SocialIcon name={'Google'} />
        </Box>
    );
};

export default SocialLogin;
