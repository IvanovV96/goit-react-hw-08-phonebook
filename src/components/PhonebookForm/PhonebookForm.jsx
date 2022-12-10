import { useDispatch, useSelector } from 'react-redux/es/exports';
import { toastWarn } from 'services/Toastify/toast';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer } from 'react-toastify';
import { ErrorMessageEl, FormEl } from './PhonebookForm.styled';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { updateFilter } from 'redux/contacts/slice';

const initialValues = {
  name: '',
  number: '',
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = Yup.object().shape({
  name: Yup.string()
    .required('required')
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: Yup.string()
    .required('required')
    .matches(
      phoneRegExp,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .min(6, 'Too short')
    .max(12, 'Too long'),
});

export const PhonebookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = (values, { resetForm }) => {
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
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormEl>
        <Field type="text" name="name" placeholder="Name" />
        <ErrorMessageEl name="name" component="div" />

        <Field type="tel" name="number" placeholder="Phone number" />
        <ErrorMessageEl name="number" component="div" />
        <button type="submit">Add contact</button>
        <ToastContainer />
      </FormEl>
    </Formik>
  );
};
