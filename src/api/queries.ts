import gql from "graphql-tag";

export const GET_WORKOUTS = gql`
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

export const CREATE_EXERCISE = gql`
  mutation CreateExercise($input: ExerciseInput!) {
    createExercise(input: $input) {
      _id
      name
      musclesWorked {
        muscle
        workload
      }
      workload
    }
  }
`;


export const GET_EXERCISES = 
  gql`
    query {
      Exercises{
        _id
        name
        workload
        musclesWorked {
          workload
          muscle
        }
      }
    }
  `