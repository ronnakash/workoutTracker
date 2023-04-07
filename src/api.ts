import { gql } from 'graphql-tag';
import { ApolloClient, InMemoryCache } from '@apollo/client';

// Define the GraphQL query
const GET_WORKOUTS = gql`
  query {
    Workouts {
      _id
      title
    #   authorId
      exercises {
        exercise {
          _id
          name
        }
        sets {
          setNumber
          reps
          rpe
          weight
        }
      }
    }
  }
`;

// Define typescript interfaces for the workout, workoutExercise, exercise, and sets types
export interface Set {
    setNumber: number;
    reps: number;
    rpe: number;
    weight: number;
}

export interface Exercise {
    _id: string;
    name: string;
}

export interface WorkoutExercise {
    exercise: Exercise;
    sets: Set[];
}

export interface Workout {
    _id: string;
    title: string;
    authorId: string;
    exercises: WorkoutExercise[];
}

// Create a new ApolloClient instance
const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
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
