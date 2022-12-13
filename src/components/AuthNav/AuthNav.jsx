import { NavLink } from 'react-router-dom';
import { Flex, Link } from '@chakra-ui/react';
export const AuthNav = () => {
  return (
    <Flex alignItems="center" gap="15px" fontSize="20px">
      <Link
        as={NavLink}
        to="/register"
        p="10px"
        borderRadius="15px"
        _hover={{ background: 'white', color: 'black' }}
        _activeLink={{ background: 'white', color: 'black' }}
      >
        Register
      </Link>
      <Link
        as={NavLink}
        to="/login"
        p="10px"
        borderRadius="15px"
        _hover={{ background: 'white', color: 'black' }}
        _activeLink={{ background: 'white', color: 'black' }}
      >
        Log In
      </Link>
    </Flex>
  );
};
