import { Button } from '@chakra-ui/react';
import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { FaGoogle } from 'react-icons/fa';
const clientId = '821864621073-42un9ghe14bff38651nj8k16kmse093q.apps.googleusercontent.com';

const LogoutHooks = () => {
    const onLogoutSuccess = (res) => {
        alert('Logged out Successfully');
    }
    const onFailure = () => {
        console.log('Handle failure case');
    }
    const {signOut} = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    });
    return (
        <Button onClick={signOut} leftIcon={<FaGoogle />}>
            Sign Out
        </Button>
    );
};

export default LogoutHooks;