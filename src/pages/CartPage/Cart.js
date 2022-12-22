import {
  Avatar,
  Button,
  Checkbox,
  HStack,
  Image,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaCartPlus, FaSearch, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios({
      baseURL: 'http://localhost:8000/getallCarts',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        iduser: localStorage.getItem('iduser'),
      }),
    })
      .then(res => {
        setCarts(res.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, [carts]);
  const Trong = () => {
    return (
      <Stack w='64vw' h='10vh'>
        <Text>Bạn chưa có mặt hàng nào trong giỏ hàng !!!</Text>
      </Stack>
    );
  };

  return (
    <HStack>
      <Navbar />
      <VStack w="20vw" h="100vh"></VStack>
      <VStack w="80vw" h="100vh">
        <HStack w="100%" h="7%" flexDirection="row-reverse">
          <Avatar
            name="Duong Nguyen"
            src={
              localStorage.getItem('linkAvt')
                ? localStorage.getItem('linkAvt')
                : 'https://i.pinimg.com/564x/89/4f/4b/894f4b2f803a5618a3c02795b361baa6.jpg'
            }
            margin="3px"
            padding="1px"
          />
          <HStack w="12%" h="100%">
            <Text fontSize="16px" fontWeight="600">
              {localStorage.getItem('name')
                ? localStorage.getItem('name')
                : 'Duong Nguyen'}
            </Text>
          </HStack>

          <Input placeholder="Search..."></Input>
          <Button>
            <FaSearch />
          </Button>
        </HStack>
        <HStack
          w="80%"
          h="10%"
          borderWidth="1px"
          borderColor="gray"
          justifyContent="space-evenly"
        >
          <Stack w="40%" h="100%" justifyContent="center">
            <Text color="gray" fontWeight="500">
              Sản phẩm
            </Text>
          </Stack>
          <Stack w="12%" h="100%" justifyContent="center">
            <Text color="gray" fontWeight="500">
              Đơn giá
            </Text>
          </Stack>
          <Stack w="12%" h="100%" justifyContent="center">
            <Text color="gray" fontWeight="500">
              Số lượng
            </Text>
          </Stack>
          <Stack w="12%" h="100%" justifyContent="center">
            <Text color="gray" fontWeight="500">
              Số tiền
            </Text>
          </Stack>
          <Stack w="12%" h="100%" justifyContent="center">
            <Text color="gray" fontWeight="500">
              Thao tác
            </Text>
          </Stack>
        </HStack>
        {carts
          ? carts.map((element, index) => {
              return (
                <HStack
                  w="80%"
                  h="20%"
                  borderWidth="1px"
                  borderColor="gray"
                  justifyContent="space-evenly"
                  key={index}
                >
                  <HStack w="40%" h="100%" justifyContent="center">
                    <Image
                      src={
                        element?.linkImg
                          ? element?.linkImg
                          : localStorage.getItem('linkPro')
                      }
                      boxSize="125px"
                    />
                    <Stack w="30%" h="100%">
                      <Text color="gray" fontWeight="500">
                        {element?.name
                          ? element?.name
                          : localStorage.getItem('namePro')}
                      </Text>
                    </Stack>
                    <Stack w="30%" h="100%">
                      <Text color="gray" fontWeight="500">
                        Phân loại:{' '}
                        {element?.color
                          ? element?.color
                          : localStorage.getItem('colorPro')}
                        ,{' '}
                        {element?.size
                          ? element?.size
                          : localStorage.getItem('sizePro')}{' '}
                      </Text>
                    </Stack>
                  </HStack>
                  <Stack w="12%" h="100%" justifyContent="center">
                    <Text color="gray" fontWeight="500">
                      {element?.price ? element?.price : '35000đ'}
                    </Text>
                  </Stack>
                  <Stack w="12%" h="100%" justifyContent="center">
                    <Text color="gray" fontWeight="500">
                      {element?.amount ? element?.amount : '2'}
                    </Text>
                  </Stack>
                  <Stack w="12%" h="100%" justifyContent="center">
                    <Text color="gray" fontWeight="500">
                      {element?.sum ? element?.sum : '70000đ'}
                    </Text>
                  </Stack>
                  <Stack w="12%" h="100%" justifyContent="center">
                    <Button colorScheme="twitter" onClick={() => {          
                        localStorage.setItem('namePro', element?.name);
                        localStorage.setItem('pricePro', element?.price);
                        localStorage.setItem('linkPro', element?.linkImg);
                        localStorage.setItem('amountPro', element?.amount);
                        localStorage.setItem('sizePro', element?.size);
                        localStorage.setItem('colorPro', element?.color);
                        navigate('/update');
                      }}>Update</Button>
                    <Button colorScheme="red" onClick={()=>{
                      axios({
                          baseURL: 'http://localhost:8000/delete',
                          method: 'post',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          data: JSON.stringify({
                            iduser : localStorage.getItem('iduser'),
                            name: element?.name,
                            price: element?.price,
                            amount: element?.amount,
                            color: element?.color,
                            size: element?.size
                          }),
                        })
                          .then(res => {
                            console.log(res.data.status);
                          })
                          .catch(error => {
                            console.log(error);
                          })
                    }}>Delete</Button>
                  </Stack>
                </HStack>
              );
            })
          : Trong()}
      </VStack>
    </HStack>
  );
};

export default Cart;
