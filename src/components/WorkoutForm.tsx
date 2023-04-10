import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';
import { Workout, Set, WorkoutExercise, Exercise} from '../api/inputs';
import { workoutFormStyles } from '../styles';
import { getAllExercises } from '../api/api';
import { Picker } from '@react-native-picker/picker';

interface Props {
  onSubmit: (workout: Workout) => void;
}

export const NewWorkoutForm = ({ onSubmit }: Props) => {
  const [title, setTitle] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [exercises, setExercises] = useState<WorkoutExercise[]>([]);
  const [exerciseList, setExerciseList] = useState<Exercise[]>([]);

  useEffect(() => {
    getAllExercises().then((exercises) => {
      setExerciseList(exercises);
    });
  }, []);
  

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

    const newSet: Set = { setNumber: exercises[exerciseIndex].sets.length+1, reps: 0, rpe: 0, weight: 0 };
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
      {exercises.map((exercise, exerciseIndex) => (
        <View key={exerciseIndex} style={workoutFormStyles.exerciseContainer}>
          <View style={workoutFormStyles.exerciseHeader}>
            {/* <TextInput
              placeholder="Exercise name"
              value={exercise.exercise.name}
              onChangeText={(text) => {
                const newExercises = [...exercises];
                newExercises[exerciseIndex].exercise.name = text;
                setExercises(newExercises);
              }}
              style={workoutFormStyles.exerciseInput}
            /> */}
            {exercises.map((exercise, exerciseIndex) => (
                <View key={exerciseIndex} style={workoutFormStyles.exerciseContainer}>
                    <View style={workoutFormStyles.exerciseHeader}>
                        <Picker
                            selectedValue={exercise.exercise._id}
                            onValueChange={(value: string) => {
                            const newExercises = [...exercises];
                            const selectedExercise = exerciseList.find((exercise) => exercise._id === value);
                            if (selectedExercise) {
                                newExercises[exerciseIndex].exercise = { ...selectedExercise };
                                setExercises(newExercises);
                            }
                            }}
                            style={workoutFormStyles.exerciseInput}
                        >
                            {exerciseList.map((exercise) => (
                            <Picker.Item key={exercise._id} label={exercise.name} value={exercise._id} />
                            ))}
                        </Picker>
                        <Pressable onPress={() => handleRemoveExercise(exerciseIndex)} style={workoutFormStyles.exerciseButton}>
                            <Text style={workoutFormStyles.exerciseButtonText}>-</Text>
                        </Pressable>
                    </View>
                </View>
                ))}

            <Pressable onPress={() => handleRemoveExercise(exerciseIndex)} style={workoutFormStyles.exerciseButton}>
              <Text style={workoutFormStyles.exerciseButtonText}>-</Text>
            </Pressable>
          </View>
          {exercise.sets.map((set : Set, setIndex : number) => (
            <View key={setIndex} style={workoutFormStyles.setContainer}>
              <View style={workoutFormStyles.setGrid}>
                <View style={workoutFormStyles.setColumn}>
                  <Text style={workoutFormStyles.setLabel}>Set {set.setNumber}</Text>
                </View>
                <View style={workoutFormStyles.setColumn}>
                  <Text style={workoutFormStyles.setLabelSmall}>Reps</Text>
                  <TextInput
                    // placeholder="Reps"
                    keyboardType="numeric"
                    value={set.reps.toString()}
                    onChangeText={(text) => {
                      const newExercises = [...exercises];
                      newExercises[exerciseIndex].sets[setIndex].reps = parseInt(text);
                      setExercises(newExercises);
                    }}
                    style={workoutFormStyles.setInput}
                  />
                </View>
                <View style={workoutFormStyles.setColumn}>
                <Text style={workoutFormStyles.setLabelSmall}>Weight</Text>
                  <TextInput
                    // placeholder="Weight"
                    keyboardType="numeric"
                    value={set.weight.toString()}
                    onChangeText={(text) => {
                      const newExercises = [...exercises];
                      newExercises[exerciseIndex].sets[setIndex].weight = parseInt(text);
                      setExercises(newExercises);
                    }}
                    style={workoutFormStyles.setInput}
                  />
                </View>
                <View style={workoutFormStyles.setColumn}>
                <Text style={workoutFormStyles.setLabelSmall}>RPE</Text>
                  <TextInput
                    // placeholder="RPE"
                    keyboardType="numeric"
                    value={set.rpe.toString()}
                    onChangeText={(text) => {
                      const newExercises = [...exercises];
                      newExercises[exerciseIndex].sets[setIndex].rpe = parseInt(text);
                      setExercises(newExercises);
                    }}
                    style={workoutFormStyles.setInput}
                  />
                </View>
                <View style={workoutFormStyles.setColumn}>
                  <Pressable onPress={() => handleRemoveSet(exerciseIndex, setIndex)} style={workoutFormStyles.setButton}>
                    <Text style={workoutFormStyles.setButtonText}>-</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ))}
          <Pressable onPress={() => handleAddSet(exerciseIndex)} style={workoutFormStyles.setButton}>
            <Text style={workoutFormStyles.setButtonText}>Add Set</Text>
          </Pressable>
        </View>
      ))}
      <Pressable onPress={handleAddExercise} style={workoutFormStyles.exerciseButton}>
        <Text style={workoutFormStyles.exerciseButtonText}>Add Exercise</Text>
      </Pressable>
      <Pressable onPress={handleSubmit} style={workoutFormStyles.submitButton}>
        <Text style={workoutFormStyles.submitButtonText}>Submit</Text>
      </Pressable>
    </View>
  );
  
};

export default NewWorkoutForm;
    
    
    
    