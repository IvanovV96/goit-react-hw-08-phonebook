import { ErrorMessage, Field, Form, Formik } from 'formik';
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
  const handleSubmit = e => {
    if (email === '' || password === '' || name === '') return;
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Formik onSubmit={handleSubmit} initialValues={{ name, email, password }}>
      <Form>
        <h2>Register page</h2>
        <label htmlFor="name">Login</label>
        <Field
          type="text"
          name="name"
          placeholder="login"
          value={name}
          onChange={handleChange}
        />
        <ErrorMessage name="login" component="div" />
        <label htmlFor="email">E-mail</label>
        <Field
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleChange}
        />
        <ErrorMessage name="e-mail" component="div" />
        <label htmlFor="password">Password</label>
        <Field
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
        <ErrorMessage name="password" component="div" />
        <button type="submit">Enter</button>
      </Form>
    </Formik>
  );
};
