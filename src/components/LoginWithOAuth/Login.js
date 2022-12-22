import { Stack, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { refreshTokenSetup } from '../../utils/refreshTokenSetup';
const clientId =
  '821864621073-lisd1k45mh8ijurl93ef1d4uie227ufv.apps.googleusercontent.com';
const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);
    localStorage.setItem('linkAvt', res.profileObj.imageUrl);
    localStorage.setItem('name', res.profileObj.name);
    localStorage.setItem('email', res.profileObj.email.slice(0,-10));
    axios({
      baseURL: 'http://localhost:8000/signupoauth',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        email: res.profileObj.email,
        name: res.profileObj.name,
        linkAvt: res.profileObj.imageUrl
      }),
    })
      .then(res => {
        console.log(res.data);
        res.data === 'Email is exist' ? toast({
          title: 'Email is exist',
          status: 'error',
          isClosable: true,
        }) : tranferPage();
      }).catch(error => {
        console.log(error);
      });
    
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
