import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Workout, Set, WorkoutExercise, Exercise} from '../api/inputs';

interface Props {
  onSubmit: (workout: Workout) => void;
}

export const NewWorkoutForm = ({ onSubmit }: Props) => {
  const [title, setTitle] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [exercises, setExercises] = useState<WorkoutExercise[]>([]);

  const handleAddExercise = () => {
    const newExercise: WorkoutExercise = { exercise: { _id: '', name: '' }, sets: [] };
    setExercises([...exercises, newExercise]);
  };

  const handleRemoveExercise = (index: number) => {
    const newExercises = [...exercises];
    newExercises.splice(index, 1);
    setExercises(newExercises);
  };

  const handleAddSet = (exerciseIndex: number) => {

    const newSet: Set = { setNumber: 0, reps: 0, rpe: 0, weight: 0 };
    const newExercises = [...exercises];
    newExercises[exerciseIndex].sets.push(newSet);
    setExercises(newExercises);
  };

  const handleRemoveSet = (exerciseIndex: number, setIndex: number) => {
    const newExercises = [...exercises];
    newExercises[exerciseIndex].sets.splice(setIndex, 1);
    setExercises(newExercises);
  };

  const handleSubmit = () => {
    const newWorkout: Workout = { _id: '', title, authorId, exercises };
    onSubmit(newWorkout);
  };

  return (
    <View>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Author ID" value={authorId} onChangeText={setAuthorId} />
      <Text>Exercises:</Text>
      {exercises.map((exercise, exerciseIndex) => (
        <View key={exerciseIndex}>
          <TextInput
            placeholder="Exercise name"
            value={exercise.exercise.name}
            onChangeText={(text) => {
              const newExercises = [...exercises];
              newExercises[exerciseIndex].exercise.name = text;
              setExercises(newExercises);
            }}
          />
          {exercise.sets.map((set : Set, setIndex : number) => (
            <View key={setIndex}>
              <Text>Set {set.setNumber}</Text>
              <TextInput
                placeholder="Reps"
                keyboardType="numeric"
                value={set.reps.toString()}
                onChangeText={(text) => {
                  const newExercises = [...exercises];
                  newExercises[exerciseIndex].sets[setIndex].reps = parseInt(text);
                  setExercises(newExercises);
                }}
              />
              <TextInput
                placeholder="RPE"
                keyboardType="numeric"
                value={set.rpe.toString()}
                onChangeText={(text) => {
                  const newExercises = [...exercises];
                  newExercises[exerciseIndex].sets[setIndex].rpe = parseInt(text);
                  setExercises(newExercises);
                }}
              />
              <TextInput
                placeholder="Weight"
                keyboardType="numeric"
                value={set.weight.toString()}
                onChangeText={(text) => {
                  const newExercises = [...exercises];
                  newExercises[exerciseIndex].sets[setIndex].weight = parseInt(text);
                  setExercises(newExercises);
                }}
                />
                <Button title="Remove Set" onPress={() => handleRemoveSet(exerciseIndex, setIndex)} />
              </View>
            ))}
            <Button title="Add Set" onPress={() => handleAddSet(exerciseIndex)} />
            <Button title="Remove Exercise" onPress={() => handleRemoveExercise(exerciseIndex)} />
          </View>
        ))}
        <Button title="Add Exercise" onPress={handleAddExercise} />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    );
};

export default NewWorkoutForm;
    
    
    
    