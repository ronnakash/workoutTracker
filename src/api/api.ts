import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Exercise, ExerciseInput, ExerciseOutput, Workout } from './inputs';
import { CREATE_EXERCISE, GET_EXERCISES, GET_WORKOUTS } from './queries';
import axios, { AxiosResponse } from 'axios';
import { API_URL, loginUserRequest, registerUserRequest } from './requests';
import User, { SigninFormValues, SignupFormValues } from '../interfaces/user';

const getHeader = async (user : User | undefined) => {
  let token = user? user.token : null;
  return token? {Authorization: token} : {Authorization: "Bearer"};
};

// Create a new ApolloClient instance
const client = new ApolloClient({
    uri: `${API_URL}/graphql/`,
    cache: new InMemoryCache(),
});

// Define a function to make the GraphQL query
export const getWorkouts = async (): Promise<Workout[]> => {
    // console.log("api call")
    // const res = await client.query({ query: GET_WORKOUTS });
    // console.log(res);
    // const { data } = res;
    // return data.Workouts;
    return [];
};

// Define a function to create a new exercise
export const createExercise = async (
  exerciseInput: ExerciseInput
): Promise<ExerciseOutput> => {
  console.log("api call")
  const res = await client.mutate({
    mutation: CREATE_EXERCISE,
    variables: {
      input: exerciseInput,
    },
  });

  return res.data.createExercise;
};


export const register = async (form : SignupFormValues) : Promise<User | undefined> => {
  let user;
  let headers = await getHeader(user);
  const registerForm : SigninFormValues = {
      username: form.username,
      email: form.email,
      password: form.password1
  };
  await registerUserRequest
      .put('', registerForm, {headers: headers})
      .then((response : AxiosResponse)=> {
          user = response.data;
      })
      // .catch(error => displayError(error))
  return user;
};

export const login = async (form : SigninFormValues) : Promise<User | undefined> => {
  let user;
  await loginUserRequest
      .post('', form)
      .then((response : AxiosResponse)=> {
          user = response.data;
      })
      // .catch(error => displayError(error))
  return user;
};


export const getAllExercises = async () =>  {
  try {
    console.log("exercises");
    const response = await client.query({ query: GET_EXERCISES })
    console.log(response);
    console.log(response.data.Exercises as Exercise[]);
    return response.data.Exercises as Exercise[];
  } catch (error) {
    console.error(error);
  }
  return [] 
};
