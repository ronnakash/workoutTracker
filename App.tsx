import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { styles } from './src/styles';
import Workouts from './src/components/Workouts';
import LoginForm from './src/components/LoginUser';
import { login, register } from './src/api/api';
import RegisterForm from './src/components/RegisterUser';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello from React Native!!!</Text>
        {/* <Workouts /> */}
        <RegisterForm register={register}/>
        <LoginForm login={login}/>
      <StatusBar style="auto" />
    </View>
  );
}

