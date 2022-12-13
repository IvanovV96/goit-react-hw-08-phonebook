import { Wrap } from '@chakra-ui/react';
import { useSelector } from 'react-redux/es/exports';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { Contact } from './Contact';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <Wrap direction="column" gap={4}>
      {contacts.map(contact => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </Wrap>
  );
};
