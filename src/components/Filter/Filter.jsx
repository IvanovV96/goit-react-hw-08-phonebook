import { useDispatch, useSelector } from 'react-redux/es/exports';
import { updateFilter } from 'redux/contacts/slice';

import { selectFilter } from 'redux/contacts/selectors';
import { Input } from '@chakra-ui/react';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <Input
      type="text"
      onChange={e => dispatch(updateFilter(e.currentTarget.value))}
      value={filter}
      placeholder="Search by name"
      border="1px solid black"
      borderRadius="5px"
      p="5px"
      pl="10px"
      mt={6}
    />
  );
};
