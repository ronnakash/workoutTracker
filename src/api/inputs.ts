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

export interface MuscleInput {
    muscle: string;
    workload: number;
}
  
export interface ExerciseInput {
    name: string;
    musclesWorked: MuscleInput[];
    workload: number;
}
  
export interface ExerciseOutput {
    _id: string;
    name: string;
    musclesWorked: MuscleInput[];
    workload: number;
}
  