import { Button, WrapItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const handleClick = () => dispatch(deleteContact(id));

  return (
    <WrapItem
      key={id}
      justifyContent="space-between"
      alignItems="center"
      gap={2}
    >
      <p>
        {name}: {number}
      </p>
      <Button
        type="button"
        onClick={handleClick}
        borderRadius="5px"
        colorScheme="red"
        size="xs"
      >
        Delete
      </Button>
    </WrapItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
  }),
};
