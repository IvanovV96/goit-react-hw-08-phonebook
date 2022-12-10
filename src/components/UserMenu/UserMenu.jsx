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
    <div>
      <p>Welcome, {name}</p>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};
