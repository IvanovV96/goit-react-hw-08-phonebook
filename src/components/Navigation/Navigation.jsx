import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Flex, Link } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Flex gap="10px">
      <Link
        as={NavLink}
        to="/"
        fontSize="20px"
        p="10px"
        borderRadius="15px"
        _hover={{ background: 'white', color: 'black' }}
        _activeLink={{ background: 'white', color: 'black' }}
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          as={NavLink}
          to="/contacts"
          fontSize="20px"
          p="10px"
          borderRadius="15px"
          _hover={{ background: 'white', color: 'black' }}
          _activeLink={{ background: 'white', color: 'black' }}
        >
          Contacts
        </Link>
      )}
    </Flex>
  );
};
