import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import User, { SignupFormValues } from '../interfaces/user';
import { loginFormStyles } from '../styles';
import { register } from '../api/api';

// interface RegisterFormProps {
//   register: (values: SignupFormValues) => Promise<User | undefined>;
// }


const LoginFormSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password1: Yup.string().required('Password is required'),
    password2: Yup.string().required('Password is required'),
});

const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>();

  const formik = useFormik({
    initialValues: { username: '',email: '', password1: '', password2: '' },
    validationSchema: LoginFormSchema,
    onSubmit: async (values) => {
      const { username, email, password1, password2 } = values;
      const user = await register({ username: username, email: email, password1, password2});
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
      <Text style={loginFormStyles.title}>Register</Text>
      {error && <Text style={loginFormStyles.errorText}>{error}</Text>}
      <TextInput
        style={loginFormStyles.input}
        placeholder="Username"
        onChangeText={formik.handleChange('username')}
        value={formik.values.username}
      />
        <TextInput
        style={loginFormStyles.input}
        placeholder=" email"
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
      />
      {formik.errors.email && <Text style={loginFormStyles.errorText}>{formik.errors.email}</Text>}
      <TextInput
        style={loginFormStyles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={formik.handleChange('password')}
        value={formik.values.password1}
      />
      {formik.errors.password1 && <Text style={loginFormStyles.errorText}>{formik.errors.password1}</Text>}
      <TextInput
        style={loginFormStyles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={formik.handleChange('password')}
        value={formik.values.password2}
      />
      {formik.errors.password2 && <Text style={loginFormStyles.errorText}>{formik.errors.password2}</Text>}
      <TouchableOpacity style={loginFormStyles.button} onPress={formik.handleSubmit}>
        <Text style={loginFormStyles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};


export default RegisterForm;
