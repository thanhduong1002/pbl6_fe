import { Button, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const clientId =
  '821864621073-42un9ghe14bff38651nj8k16kmse093q.apps.googleusercontent.com';
const Logout = () => {
  const navigate = useNavigate();
  const onSuccess = () => {
    navigate('/');
  };
  return (
    <HStack w="100%" h="100%" justify="center" borderRadius='35px'>
        <FaSignOutAlt color='white' size={35}/>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </HStack>
    // <HStack w="100%" h="10%" justify="center">
    // <Button
    //   w="70%"
    //   h="50px"
    //   fontSize="19px"
    //   color="#3399FF"
    //   clientId={clientId}
    //   buttonText='Logout'
    //   onLogoutSuccess={onSuccess}
    // >
    //   <FaSignOutAlt />
    //   Logout
    // </Button>
    //   </HStack>
  );
};

export default Logout;
