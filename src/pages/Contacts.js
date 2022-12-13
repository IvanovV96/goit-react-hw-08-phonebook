import { useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import { ContactsList } from 'components/Contacts/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';
import { Box, Heading, HStack, VStack } from '@chakra-ui/react';

export const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  return (
    <HStack as="section" p="40px" justify="space-around">
      <PhonebookForm />
      <VStack alignSelf="flex-start">
        <Heading as="h2" fontSize="24px" fontFamily="Roboto" textAlign="center">
          Contacts
        </Heading>

        {contacts?.length > 0 ? (
          <>
            <Filter />
            {isLoading && contacts.length === 0 ? (
              <Box as={Loader} textAlign="center" />
            ) : null}
            <ContactsList />
          </>
        ) : null}
      </VStack>
    </HStack>
  );
};
