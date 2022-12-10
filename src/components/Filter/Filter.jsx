import { useDispatch, useSelector } from 'react-redux/es/exports';
import { updateFilter } from 'redux/contacts/slice';

import { selectFilter } from 'redux/selectors';

import { FilterField } from './Filter.styled';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <FilterField
      type="text"
      onChange={e => dispatch(updateFilter(e.currentTarget.value))}
      value={filter}
      placeholder="Search by name"
    />
  );
};
