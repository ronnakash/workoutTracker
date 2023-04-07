import { gql } from 'graphql-tag';
import { ApolloClient, InMemoryCache } from '@apollo/client';

// Define the GraphQL query
const GET_WORKOUTS = gql`
  query {
    Workouts {
      _id
      title
      authorId
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
interface Set {
  setNumber: number;
  reps: number;
  rpe: number;
  weight: number;
}

interface Exercise {
  _id: string;
  name: string;
}

interface WorkoutExercise {
  exercise: Exercise;
  sets: Set[];
}

interface Workout {
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
  const { data } = await client.query({ query: GET_WORKOUTS });
  return data.Workouts;
};
