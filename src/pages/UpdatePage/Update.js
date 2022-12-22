import {
  Avatar,
  Button,
  HStack,
  Image,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaCartPlus, FaSearch, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';

const Update = () => {
  const [count, setCount] = useState(Number.parseInt(localStorage.getItem('amountPro')));
  const [color, setColor] = useState(localStorage.getItem('colorPro'));
  const [size, setSize] = useState(localStorage.getItem('sizePro'));
  const filterCount = num => {
    if (num < 1) return (num = 1);
    else return num;
  };
  const navigate = useNavigate();
  const toast = useToast();
  useEffect(()=> {axios({
    baseURL: 'http://localhost:8000/getProduct',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      iduser: Number.parseInt(localStorage.getItem('iduser')),
      name: localStorage.getItem('namePro'),
      price: Number.parseInt(localStorage.getItem('pricePro')),
      amount: Number.parseInt(localStorage.getItem('amountPro')),
      color: localStorage.getItem('colorPro'),
      size: localStorage.getItem('sizePro')
    }),
  })
    .then(res => {
      localStorage.setItem('_id',res.data.message._id)
    })
    .catch(error => {
      console.log(error);
    });
}, []);
  const handleSubmit = () => {
    localStorage.setItem('colorPro',color);
    localStorage.setItem('sizePro',size);
    axios({
      baseURL: 'http://localhost:8000/update',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        _id: localStorage.getItem('_id'),
        iduser: localStorage.getItem('iduser'),
        name: localStorage.getItem('namePro'),
        price: localStorage.getItem('pricePro'),
        amount: count,
        color: color,
        size: size
      }),
    })
      .then(res => {
        console.log(res.data.message);
        toast({
          title: 'Update Success',
          status: 'success',
          isClosable: true,
        })
      }).catch(error => {
        console.log(error);
      });
  };
  return (
    <HStack>
      <Navbar />
      <Stack w="20vw" h="100vh" />
      <Stack w="80vw" h="100vh" alignItems="center">
        <SearchBar />
        <HStack w="80%" h="93%">
          <Stack w="40%" h="100%">
            <Image
              src={
                localStorage.getItem('linkPro')
                  ? localStorage.getItem('linkPro')
                  : 'https://cf.shopee.vn/file/7a6b271f5b7ac10659297e457b2e09fb'
              }
            />
            <Button
              leftIcon={<FaArrowLeft />}
              colorScheme="twitter"
              onClick={() => navigate('/cart')}
            >
              Back
            </Button>
          </Stack>
          <Stack w="60%" h="100%">
            <Text fontWeight="500" fontSize="25">
              {localStorage.getItem('namePro')
                ? localStorage.getItem('namePro')
                : 'Ao Hoddie sieu dep'}
            </Text>
            <HStack justifyContent="space-between">
              <HStack>
                <Text fontWeight="bold" fontSize="18">
                  {localStorage.getItem('starPro')
                    ? localStorage.getItem('starPro')
                    : 4.5}
                </Text>
                <FaStar color="skyblue" />
              </HStack>
              <HStack>
                <Text fontWeight="bold">1.0k</Text>
                <Text>Đánh giá</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">
                  {localStorage.getItem('soldPro')
                    ? localStorage.getItem('soldPro')
                    : 2.3}
                  k
                </Text>
                <Text>Đã bán</Text>
              </HStack>
            </HStack>
            <Text fontSize="30" color="skyblue" fontWeight="bold">
              {localStorage.getItem('pricePro')
                ? localStorage.getItem('pricePro')
                : 85000}
              đ
            </Text>
            <HStack w="100%" h="90%">
              <Stack w="30%" h="70%" justifyContent="space-around">
                <Stack w="100%" h="25%">
                  <Text fontWeight="400">Vận chuyển</Text>
                </Stack>
                <Stack w="100%" h="25%">
                  <Text fontWeight="400">Màu</Text>
                </Stack>
                <Stack w="100%" h="25%">
                  <Text fontWeight="400">Size</Text>
                </Stack>
                <Stack w="100%" h="25%">
                  <Text fontWeight="400">Số lượng</Text>
                </Stack>
              </Stack>
              <Stack w="70%" h="70%">
                <Stack w="100%" h="25%">
                  <Text fontSize="23">25000đ</Text>
                </Stack>
                <Stack
                  w="100%"
                  h="25%"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <RadioGroup
                    defaultValue="Red"
                    value={color}
                    onChange={setColor}
                  >
                    <Stack spacing={5} direction="row">
                      <Radio colorScheme="red" value="Red">
                        Red
                      </Radio>
                      <Radio colorScheme="green" value="Green">
                        Green
                      </Radio>
                      <Radio colorScheme="blue" value="Blue">
                        Blue
                      </Radio>
                      <Radio colorScheme="orange" value="Black">
                        Black
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </Stack>
                <Stack w="100%" h="25%">
                  <RadioGroup defaultValue="S" value={size} onChange={setSize}>
                    <Stack spacing={5} direction="row">
                      <Radio colorScheme="red" value="S">
                        S
                      </Radio>
                      <Radio colorScheme="green" value="M">
                        M
                      </Radio>
                      <Radio colorScheme="blue" value="L">
                        L
                      </Radio>
                      <Radio colorScheme="orange" value="XL">
                        XL
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </Stack>
                <HStack w="100%" h="25%">
                  <Button
                    colorScheme="cyan"
                    onClick={() => setCount(count - 1)}
                    variant="outline"
                  >
                    -
                  </Button>
                  <Text>{filterCount(count)}</Text>
                  <Button
                    colorScheme="cyan"
                    onClick={() => setCount(count + 1)}
                    variant="outline"
                  >
                    +
                  </Button>
                </HStack>
              </Stack>
            </HStack>
            <Button
              w="100%"
              h="10%"
              colorScheme="twitter"
              leftIcon={<FaCartPlus />}
              onClick={handleSubmit}
            >
              Update
            </Button>
          </Stack>
        </HStack>
      </Stack>
    </HStack>
  );
};

export default Update;
