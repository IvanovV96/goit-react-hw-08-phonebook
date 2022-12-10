import { useSelector } from 'react-redux/es/exports';
import { selectVisibleContacts } from 'redux/selectors';
import { Contact } from './Contact';
import { ContactsEl } from './Contacts.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ContactsEl>
      {contacts.map(contact => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </ContactsEl>
  );
};
