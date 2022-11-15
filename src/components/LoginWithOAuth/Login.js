import { Stack } from '@chakra-ui/react';
import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { refreshTokenSetup } from '../../utils/refreshTokenSetup';
const clientId =
  '821864621073-42un9ghe14bff38651nj8k16kmse093q.apps.googleusercontent.com';
const Login = () => {
  const navigate = useNavigate();

  const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);
    localStorage.setItem('name', res.profileObj.name);
    localStorage.setItem('email', res.profileObj.email.slice(0,-10));
    res.profileObj.name !== '' ? tranferPage() : console.log('null');
    refreshTokenSetup(res);
  };
  const tranferPage = () => {
    navigate('/home');
  };
  const onFailure = (res) => {
    console.log('[Login failed] res:', res);
  };
  return (
    <Stack>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </Stack>
  );
};

export default Login;
