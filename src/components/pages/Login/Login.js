import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    if (email === '' || password === '') return;
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ email, password }}>
      <Form>
        <h2>Login page</h2>
        <label htmlFor="email">Email</label>
        <Field
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleChange}
        />
        <ErrorMessage name="login" component="div" />
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
