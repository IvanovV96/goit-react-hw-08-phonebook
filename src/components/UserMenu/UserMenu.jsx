import { Box, Flex, Text } from '@chakra-ui/react';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useAuth();
  const handleClick = e => {
    dispatch(logOut());
  };
  return (
    <Flex gap="10px" alignItems="center">
      <Text fontFamily="Roboto">Welcome, {name}</Text>
      <Box
        as="button"
        onClick={handleClick}
        p="5px 15px"
        borderRadius="10px"
        bg="red"
        color="white"
        _hover={{ backgroundColor: 'white', color: 'black' }}
      >
        Logout
      </Box>
    </Flex>
  );
};
