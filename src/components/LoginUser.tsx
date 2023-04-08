import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import User, { SigninFormValues, SignupFormValues } from '../interfaces/user';
import { loginFormStyles } from '../styles';
import { login } from '../api/api';

// interface LoginFormProps {
//     login: (form : SigninFormValues) => Promise<User | undefined>;
// }

const LoginFormSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  const [error, setError] = useState<string | undefined>();

  const formik = useFormik({
    initialValues: { username: '', email: '', password: '' },
    validationSchema: LoginFormSchema,
    onSubmit: async (values) => {
      const { username, email, password } = values;
      const user = await login({ username, email, password });
      if (user) {
        console.log(`Logged in user ${user.username}`);
        // Do something with the user object, like store it in a state variable
      } else {
        setError('Invalid username or password');
      }
    },
  });

  return (
    <View style={loginFormStyles.container}>
      <Text style={loginFormStyles.title}>Login</Text>
      {error && <Text style={loginFormStyles.errorText}>{error}</Text>}
      <View style={loginFormStyles.row}>
        <Text style={loginFormStyles.label}>Username</Text>
        <TextInput
          style={loginFormStyles.input}
          placeholder="Username"
          onChangeText={formik.handleChange('username')}
          onBlur={formik.handleBlur('username')}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <Text style={loginFormStyles.errorText}>{formik.errors.username}</Text>
        ) : null}
      </View>
      <View style={loginFormStyles.row}>
        <Text style={loginFormStyles.label}>Email</Text>
        <TextInput
          style={loginFormStyles.input}
          placeholder="Email"
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <Text style={loginFormStyles.errorText}>{formik.errors.email}</Text>
        ) : null}
      </View>
      <View style={loginFormStyles.row}>
        <Text style={loginFormStyles.label}>Password</Text>
        <TextInput
          style={loginFormStyles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <Text style={loginFormStyles.errorText}>{formik.errors.password}</Text>
        ) : null}
      </View>
      <TouchableOpacity style={loginFormStyles.button} onPress={formik.handleSubmit}>
        <Text style={loginFormStyles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;
