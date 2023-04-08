import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { createExercise, getWorkouts } from '../api/api';
import { workoutStyles } from '../styles';
import { ExerciseInput, Workout } from '../api/inputs';

const Workouts = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getWorkouts();
      console.log(result);
      setWorkouts(result);      
    };
    fetchData();
  }, []);

  return (
<View style={workoutStyles.container}>
  {workouts.map((workout) => (
    <View key={workout._id} style={workoutStyles.workoutContainer}>
      <Text style={workoutStyles.title}>{workout.title}</Text>
      <Text style={workoutStyles.author}>{workout.authorId}</Text>
      {workout.exercises.map((exercise) => (
        <View key={exercise.exercise._id} style={workoutStyles.exerciseContainer}>
          <Text style={workoutStyles.exerciseName}>{exercise.exercise.name}</Text>
          {exercise.sets.map((set) => (
            <View key={set.setNumber} style={workoutStyles.setContainer}>
              <Text style={workoutStyles.setText}>Set {set.setNumber}</Text>
              <Text style={workoutStyles.setText}>Reps: {set.reps}</Text>
              <Text style={workoutStyles.setText}>RPE: {set.rpe}</Text>
              <Text style={workoutStyles.setText}>Weight: {set.weight}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  ))}
</View>
  );
};

export default Workouts;

