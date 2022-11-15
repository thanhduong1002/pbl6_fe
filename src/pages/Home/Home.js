import {
  Avatar,
  Button,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  FaSearch,
} from 'react-icons/fa';

import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  return (
    <HStack>
      <Navbar />
      <VStack w="80vw" h="100vh">
        <HStack w="100%" h="7%" flexDirection="row-reverse">
          <Avatar
            name='Duong Nguyen'
            src={localStorage.getItem('linkAvt') ? localStorage.getItem('linkAvt') :"https://i.pinimg.com/564x/89/4f/4b/894f4b2f803a5618a3c02795b361baa6.jpg"}
            margin="3px"
            padding="1px"
          />
          <HStack w="12%" h="100%">
            <Text fontSize="16px" fontWeight="600">
              {localStorage.getItem('name') ? localStorage.getItem('name') : 'Duong Nguyen'}
            </Text>
          </HStack>

          <Input
            placeholder="Search..."
          ></Input>
          <Button>
            <FaSearch />
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Home;
