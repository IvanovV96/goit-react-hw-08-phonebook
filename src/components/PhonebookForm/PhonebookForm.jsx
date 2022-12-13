import { useDispatch, useSelector } from 'react-redux/es/exports';
import { toastWarn } from 'services/Toastify/toast';
import { Field, Form, Formik } from 'formik';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { updateFilter } from 'redux/contacts/slice';
import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';

const initialValues = {
  name: '',
  number: '',
};

export const PhonebookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = (values, actions) => {
    actions.setSubmitting(false);
    if (
      contacts.some(contact => {
        return contact.name?.toLowerCase() === values.name?.toLowerCase();
      })
    ) {
      toastWarn(values.name);
      return;
    }
    dispatch(addContact(values));
    dispatch(updateFilter(''));
    actions.resetForm();
  };

  const validateName = value => {
    let error;
    if (!value) {
      error = 'Name is required';
    } else if (value.length > 20) {
      error = 'Too long!';
    }
    return error;
  };

  const validatePhone = value => {
    let error;
    const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!value) {
      error = 'Phone is required';
    } else if (!value.match(phoneno)) {
      error = 'Invalid phone number';
    }
    return error;
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {props => (
        <Form>
          <Heading
            as="h2"
            fontSize="24px"
            fontFamily="Roboto"
            textAlign="center"
          >
            Phonebook
          </Heading>
          <Field name="name" validate={validateName}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.name && form.touched.name}
                mt={4}
              >
                <FormLabel>Name</FormLabel>
                <Input {...field} placeholder="Name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="number" validate={validatePhone}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.number && form.touched.number}
                mt={4}
              >
                <FormLabel>Phone number</FormLabel>
                <Input
                  {...field}
                  as={Field}
                  type="tel"
                  placeholder="Phone number"
                />
                <FormErrorMessage>{form.errors.number}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Center>
            <Button
              as="button"
              type="submit"
              mt={4}
              isLoading={props.isSubmitting}
              p="5px 15px"
              borderRadius="10px"
              colorScheme="teal"
            >
              Add contact
            </Button>
          </Center>
        </Form>
      )}
    </Formik>
  );
};
