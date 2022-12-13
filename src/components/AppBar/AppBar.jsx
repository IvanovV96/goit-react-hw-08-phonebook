import { useAuth } from 'hooks/useAuth';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Flex } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Flex
      justify="space-between"
      as="header"
      p="20px"
      mb="30px"
      bg="linear-gradient(to left, #553c9a, #b393d3)"
      borderRadius="15px"
      color="white"
    >
      <Navigation />
      <Flex gap="10px">{isLoggedIn ? <UserMenu /> : <AuthNav />}</Flex>
    </Flex>
  );
};
