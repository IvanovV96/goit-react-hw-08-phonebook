import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ContactEl } from './Contacts.styled';

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const handleClick = () => dispatch(deleteContact(id));

  return (
    <ContactEl key={id}>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={handleClick}>
        Delete
      </button>
    </ContactEl>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
  }),
};
