import {
  Button,
  HStack,
  Image,
  PinInput,
  PinInputField,
  Stack,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronCircleLeft } from 'react-icons/fa';
import axios from 'axios';

const SubmitOTP = () => {
  const [OTP1, setOTP1] = useState('');
  const [OTP2, setOTP2] = useState('');
  const [OTP3, setOTP3] = useState('');
  const [OTP4, setOTP4] = useState('');
  const navigate = useNavigate();
  const toast = useToast();
  
  const sendOTP = () => {
    axios({
      baseURL: 'http://localhost:8000/sendOTP',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        email: localStorage.getItem('email') + '@gmail.com',
      }),
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const resetOTP = () => {
    axios({
      baseURL: 'http://localhost:8000/resetOTP',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        email: localStorage.getItem('email') + '@gmail.com',
      }),
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  let reset = setTimeout(function () {
    resetOTP();
    setTimeout(sendOTP, 8000);
  }, 25000);
  const handleSubmit = () => {
    axios({
      baseURL: 'http://localhost:8000/checkOTP',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        email: localStorage.getItem('email') + '@gmail.com',
        codeOTP: Number.parseInt(OTP1 + OTP2 + OTP3 + OTP4),
      }),
    })
      .then(res => {
        console.log(res.data);
        clearTimeout(reset);
        res.data.status === 200
          ? navigate('/home')
          : toast({
              title: 'Error!!! Please check again OTP code!',
              status: 'error',
              isClosable: true,
            });
      })
      .catch(error => {
        console.log(error);
        toast({
          title: 'Please check OTP code again',
          status: 'error',
          isClosable: true,
        });
      });
      
  };
  return (
    <VStack w="100vw" h="100vh" justify="center">
      <Image
        src="https://www.microcosm.com/images/smartsign/email.png"
        boxSize="150px"
      />
      <Text fontWeight="700" fontSize="3xl">
        Verification code
      </Text>
      <Text fontWeight="400" fontSize="xl">
        We have sent the code verification to Your email
      </Text>
      <HStack>
        <PinInput otp>
          <PinInputField
            value={OTP1}
            onChange={e => {
              setOTP1(e.target.value);
            }}
          />
          <PinInputField
            value={OTP2}
            onChange={e => {
              setOTP2(e.target.value);
            }}
          />
          <PinInputField
            value={OTP3}
            onChange={e => {
              setOTP3(e.target.value);
            }}
          />
          <PinInputField
            value={OTP4}
            onChange={e => {
              setOTP4(e.target.value);
            }}
          />
        </PinInput>
      </HStack>
      <Stack w="10vw" h="7vh">
        <Button w="100%" h="100%" colorScheme="blue" onClick={handleSubmit}>
          <Text>Submit</Text>
        </Button>
      </Stack>
      <HStack w="20vw" h="7vh" justify="center">
        <FaChevronCircleLeft size="30" />
        <Button
          onClick={() => {
            clearTimeout(reset);
            navigate('/');
          }}
        >
          <Text fontSize="xl">Back to login</Text>
        </Button>
      </HStack>
    </VStack>
  );
};

export default SubmitOTP;
