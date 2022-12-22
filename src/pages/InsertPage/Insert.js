import {
    Button,
    HStack,
    Input,
    InputGroup,
    InputRightAddon,
    InputRightElement,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useToast,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { FaEye, FaEyeSlash } from 'react-icons/fa';
  import { Link } from 'react-router-dom';

  import axios from 'axios';
import Tabs3 from '../../components/TabsInSignUp/Tabs3';
import Tabs1 from '../../components/TabsInSignUp/Tabs1';
import Tabs2 from '../../components/TabsInSignUp/Tabs2';
  const Insert = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirm, setConfirm] = useState('');
    const toast = useToast();
    const handleCreate = () => {
      let data;
    localStorage.getItem('email') === 'lenkudo2308' ? data = 1 :
     localStorage.getItem('email') === 'nguyenthanhduong100201' ? data = 2 : 
     localStorage.getItem('email') === 'lenthui1002' ? data = 3 : 
     data = 4;
      name.trim() === '' ? toast({
        title: 'Invalid Name',
        status: 'warning',
        isClosable: true,
      }) :
      email.trim().length < 6 ? toast({
        title: 'Type must be at least 6 characters',
        status: 'warning',
        isClosable: true,
      }) :
      email.trim().length > 30 ? toast({
        title: 'Type must be 30 characters maximum',
        status: 'warning',
        isClosable: true,
      }) :
      pass.trim().length === 0 ? toast({
        title: 'Please enter the count',
        status: 'warning',
        isClosable: true,
      }) :
      confirm.trim().length === 0 ? toast({
        title: 'Please enter the unit',
        status: 'warning',
        isClosable: true,
      }) :
      axios({
        baseURL: 'http://localhost:8000/insert',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
            iduser: data,
          name: name,
          type: email,
          count: parseInt(pass),
          unit : confirm
        }),
      })
        .then(res => {
          console.log(res.data);
          email === 'Instrument' ? localStorage.setItem('CountInstrument',parseInt(localStorage.getItem('CountInstrument'))+1) : localStorage.setItem('CountRaw',parseInt(localStorage.getItem('CountRaw'))+1);    
          toast({
            title: 'Insert Success',
            status: 'success',
            isClosable: true,
          })
        }).catch(error => {
          console.log(error);
          toast({
            title: 'Please check again!!!',
            status: 'error',
            isClosable: true,
          });
        })
    }
    
    return (
      <HStack w="100vw" h="100vh" bgColor="#A4ADC5" justify="center">
        <HStack w="80%" h="85%" bgColor="white" borderRadius="15px">
          <VStack
            w="35%"
            h="100%"
            bgColor="blue.500"
            borderTopLeftRadius="15px"
            borderBottomLeftRadius="15px"
            justifyContent="space-around"
          >
            <Stack w="70%" h="10%">
              <Text fontWeight="500" color="white" fontSize="xl">
                Supplies
              </Text>
            </Stack>
            <Stack w="70%" h="20%">
              <Text fontWeight="700" color="white" fontSize="3xl">
                Start insert your supplies.
              </Text>
            </Stack>
            <Stack w="70%" h="40%">
              <Tabs defaultIndex={0}>
                <TabPanels>
                  <TabPanel>
                    <Tabs3 />
                  </TabPanel>
                  <TabPanel>
                    <Tabs1 />
                  </TabPanel>
                  <TabPanel>
                    <Tabs2 />
                  </TabPanel>
                </TabPanels>
                <TabList>
                  <Tab color="white">Uncle Ho</Tab>
                  <Tab color="white">Leonardo</Tab>
                  <Tab color="white">Einstein</Tab>
                </TabList>
              </Tabs>
            </Stack>
          </VStack>
          <VStack w="65%" h="100%" justifyContent="space-around">
            <Stack w="80%" h="10%">
              <Text color="black" fontWeight="700" fontSize="2xl">
                INSERT
              </Text>
              <Text color="black" fontWeight="400" fontSize="md">
                You don't want insert? <Link to="/home">Back</Link>
              </Text>
            </Stack>
            <VStack w="80%" h="50%">
              <Stack w="100%" h="25%">
                <Text color="black" fontSize="md">
                  Name
                </Text>
                <Input
                  placeholder="Enter your supplies name"
                  value={name}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                />
              </Stack>
              <Stack w="100%" h="25%">
                <Text color="black" fontSize="md">
                  Type
                </Text>
                  <Input
                    placeholder="Enter your supplies type"
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value);
                    }}
                  />
              </Stack>
              <Stack w="100%" h="25%">
                <Text color="black" fontSize="md">
                  Count
                </Text>
                  <Input
                    pr="4.5rem"
                    placeholder="Enter count"
                    value={pass}
                    onChange={e => {
                      setPass(e.target.value);
                    }}
                  />
              </Stack>
              <Stack w="100%" h="25%">
                <Text color="black" fontSize="md">
                  Unit
                </Text>
                  <Input
                    pr="4.5rem"
                    placeholder="Enter unit"
                    value={confirm}
                    onChange={e => {
                      setConfirm(e.target.value);
                    }}
                  />
              </Stack>
            </VStack>
            <Stack w="80%" h="10%">
              <Button colorScheme="blue" onClick={handleCreate}>Create</Button>
            </Stack>
          </VStack>
        </HStack>
      </HStack>
    );
  };
  
  export default Insert;
  