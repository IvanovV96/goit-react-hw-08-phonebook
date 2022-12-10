import { useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import { ContactsList } from 'components/Contacts/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';
import { Section } from 'components/Section/Section';

const titles = {
  form: 'Phonebook',
  contacts: 'Contacts',
};

export const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  return (
    <Section title={titles.form}>
      <PhonebookForm />
      {isLoading && contacts.length === 0 ? <Loader /> : null}
      {contacts?.length > 0 ? (
        <Section title={titles.contacts}>
          <Filter />
          {isLoading && <Loader />}
          <ContactsList />
        </Section>
      ) : null}
    </Section>
  );
};
