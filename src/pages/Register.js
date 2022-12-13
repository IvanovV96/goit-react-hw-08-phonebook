import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

export const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = (e, actions) => {
    actions.setSubmitting(false);
    if (email === '' || password === '' || name === '') return;
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  const validateEmail = value => {
    let error;
    const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!email) {
      error = 'E-mail is required';
    } else if (!email.match(emailReg)) {
      error = 'Invalid e-mail address';
    }
    return error;
  };
  const validatePassword = value => {
    let error;
    if (!password) {
      error = 'Password is required';
    } else if (password.length < 6) {
      error = 'Password is too short';
    } else if (password.length > 15) {
      error = 'Password is too long';
    }
    return error;
  };
  const validateName = value => {
    let error;
    if (!name) {
      error = 'Name is required';
    } else if (name.length > 20) {
      error = 'Too long!';
    }
    return error;
  };
  return (
    <Formik onSubmit={handleSubmit} initialValues={{ name, email, password }}>
      {props => (
        <Form>
          <Heading as="h2" mb="20px">
            Login page
          </Heading>
          <Field name="name" validate={validateName}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.name && form.touched.name}
                mt={4}
              >
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  {...field}
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={handleChange}
                  w="400px"
                />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email" validate={validateEmail}>
            {({ field, form }) => (
              <FormControl
                mt={4}
                isInvalid={form.errors.email && form.touched.email}
              >
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  {...field}
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={handleChange}
                  w="400px"
                />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="password" validate={validatePassword}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.password && form.touched.password}
              >
                <FormLabel htmlFor="password" mt={4}>
                  Password
                </FormLabel>
                <Input
                  {...field}
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChange}
                  w="400px"
                />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="password" validate={validatePassword}>
            {({ field, form }) => {
              <FormControl
                isInvalid={form.errors.password && form.touched.password}
              >
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  {...field}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChange}
                  w="400px"
                />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>;
            }}
          </Field>

          <Button
            type="submit"
            colorScheme="teal"
            isLoading={props.isSubmitting}
            mt={4}
          >
            Enter
          </Button>
        </Form>
      )}
    </Formik>
  );
};
