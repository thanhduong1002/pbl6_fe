import {
    Button,
    Stack
  } from '@chakra-ui/react';
  import axios from 'axios';
  import React, { useEffect } from 'react';
  
  const AuthPage = () => {
      const callApi = () => {
        const body = {
          client_id: '1375e8ef4bffeaec5aff',
          client_secret: '7316fa31efe4c1284a5119aa90f0462f711ad49f',
          code : 'a00ddaa55382f15e4f7e'
        };
        const opts = { headers: { accept: 'application/json' } };
        axios
          .post('https://github.com/login/oauth/access_token', body, opts)
          .then((_res) => _res.data.access_token)
          .then((token) => {
            // eslint-disable-next-line no-console
            console.log('My token:', token);
          })
          .catch((err) => console.log(err));
      };
    
    return (
      <Stack>
        <Button onClick={() => callApi()}>Login with Github</Button>
      </Stack>
    );
  };
  
  export default AuthPage;
  