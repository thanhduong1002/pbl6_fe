import { Avatar, Button, HStack, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <HStack w="100%" h="7%" flexDirection="row-reverse">
          <Avatar
            name="Duong Nguyen"
            src={
              localStorage.getItem('email') === 'lenthui1002' ? 'https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-9/46492816_2312087642411611_6034350130855936000_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=L_yVTVnfypEAX9kklDY&_nc_ht=scontent-hkg4-2.xx&oh=00_AfCYVHq0SFRxL8iPvABVcscXMT5uT9g8eqg-EEACDu_YmA&oe=63C53630' :
              localStorage.getItem('email') === 'nguyenthanhduong1002' ? 'https://scontent.fdad3-5.fna.fbcdn.net/v/t1.15752-9/318380681_532708575243055_7963406938729576204_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=mof8PXKw02EAX_9MH10&_nc_ht=scontent.fdad3-5.fna&oh=03_AdR0jlCcuN1BIyg7J29-XaKsGwWmcgKKxQgHshIDZBEmxw&oe=63C55CAA' :
              localStorage.getItem('email') === 'nguyenthanhduong100201' ?'https://scontent.fdad3-1.fna.fbcdn.net/v/t1.15752-9/291368163_717698536200159_1575666663466154569_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=t6Y9C_2RMbUAX-6JD7D&tn=nMo08Zrfbu5zSS69&_nc_ht=scontent.fdad3-1.fna&oh=03_AdQ4Uj7CySeVfkFSWTE2zYbKNNjWp7CqFPrsqd7FWgxgDA&oe=63C5359B' :
              localStorage.getItem('email') === 'thanhduong10022001' ?'https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/277315854_729925231707995_2301929817519549953_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=MROurdINfPgAX_paqVI&_nc_ht=scontent-hkg4-2.xx&oh=03_AdTsPteFRufFGCm3GSXxxIyFsTxR3DcO2tKIgetcfGGszQ&oe=63C540A7' :
              localStorage.getItem('linkAvt')
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
    );
};

export default SearchBar;