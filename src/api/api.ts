import { gql } from 'graphql-tag';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { print } from 'graphql';
import { ExerciseInput, ExerciseOutput, Workout } from './inputs';
import { CREATE_EXERCISE, GET_WORKOUTS } from './queries';


// Create a new ApolloClient instance
const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql/',
    cache: new InMemoryCache(),
});

// Define a function to make the GraphQL query
export const getWorkouts = async (): Promise<Workout[]> => {
    console.log("api call")
    const res = await client.query({ query: GET_WORKOUTS });
    console.log(res);
    const { data } = res;
    return data.Workouts;
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
