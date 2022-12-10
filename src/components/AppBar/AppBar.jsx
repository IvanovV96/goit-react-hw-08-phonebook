import { useAuth } from 'hooks/useAuth';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AppBarWrapper } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <AppBarWrapper>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBarWrapper>
    </>
  );
};
