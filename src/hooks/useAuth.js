import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefteshing,
  selectUsername,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const name = useSelector(selectUsername);
  const isRefreshing = useSelector(selectIsRefteshing);
  return { isLoggedIn, name, isRefreshing };
};
