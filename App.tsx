import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { styles } from './src/styles';
import Workouts from './src/Workouts';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello from React Native!!!</Text>
        <Workouts />
      <StatusBar style="auto" />
    </View>
  );
}

