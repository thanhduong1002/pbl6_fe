import {
  Avatar,
  Button,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let data;
    localStorage.getItem('email') === 'lenkudo2308'
      ? (data = 1)
      : localStorage.getItem('email') === 'nguyenthanhduong100201'
      ? (data = 2)
      : localStorage.getItem('email') === 'lenthui1002'
      ? (data = 3)
      : localStorage.getItem('email') === 'nguyenthanhduong1002'
      ? (data = 4)
      : localStorage.getItem('email') === 'nguyenthanhduong20011002@gmail.com' 
      ? (data = 5)
      : localStorage.getItem('email') === 'thanhduong10022001@gmail.com'
      ? (data = 6)
      : (data = 7)
    localStorage.setItem('iduser', data);
    axios({
      baseURL: 'http://localhost:8000/getallProducts',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        setProducts(res.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, [products]);
  const navigate = useNavigate();
  return (
    <HStack>
      <Navbar />
      <Stack w="20vw" h="100vh"></Stack>
      <VStack w="80vw" h="100vh">
        <SearchBar />
        <Stack display='grid' gridTemplateColumns='200px 200px 200px 200px' gap='50px'>
        {products
          ? products.map((element, index) => {
              return (
                <VStack
                  // w="20%"
                  // h="100%"
                  borderWidth="2px"
                  borderColor="gray.200"
                  borderRadius="15px"
                  onClick={()=> {localStorage.setItem('namePro',element?.name);
                  localStorage.setItem('pricePro',element?.price);
                  localStorage.setItem('soldPro',element?.sold);
                  localStorage.setItem('starPro',element?.star);
                  localStorage.setItem('linkPro',element?.linkImg);
                  navigate('/detail')}
                  }
                  key={index}
                >
                  <HStack
                    w="200px"
                    // h="60%"
                    bgColor="gray.300"
                    borderWidth="2px"
                    borderColor="gray.200"
                    borderTopLeftRadius="15px"
                    borderTopRightRadius="15px"
                    justifyContent="center"
                  >
                    <Image src={element?.linkImg} boxSize="150px" />
                  </HStack>
                  <VStack w="100%" h="40%" justifyContent="space-evenly">
                    <Text>{element?.name}</Text>
                    <HStack w="100%" justifyContent="space-around">
                      <Text color="red" fontWeight="bold" fontSize="xl">
                        {element?.price}đ
                      </Text>
                      <Text color="gray.400">Đã bán {element?.sold}k</Text>
                    </HStack>
                  </VStack>
                </VStack>
              );
            })
          : null}
        </Stack>
      </VStack>
    </HStack>
  );
};

export default HomePage;
