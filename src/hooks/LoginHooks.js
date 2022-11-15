import { Button } from '@chakra-ui/react';
import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { FaGoogle } from 'react-icons/fa';
import { refreshTokenSetup } from '../../utils/refreshTokenSetup';
const clientId = '821864621073-42un9ghe14bff38651nj8k16kmse093q.apps.googleusercontent.com';
const LoginHooks = () => {
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        refreshTokenSetup(res);
    }
    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    }
    const {signIn} = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline',
    });

    //My custom button
    return (
        <Button onClick={signIn} leftIcon={<FaGoogle />}>
            Sign In with Google
        </Button>
    );
};

export default LoginHooks;