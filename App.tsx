import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { styles } from './src/styles';
import Workouts from './src/components/Workouts';
import LoginForm from './src/components/LoginUser';
import { login, register } from './src/api/api';
import RegisterForm from './src/components/RegisterUser';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route } : any) => ({
          tabBarIcon: ({ color, size } : any) => {
            let iconName : 'dumbbell' | 'account-plus' | 'login' | undefined;

            if (route.name === 'Workouts') {
              iconName = 'dumbbell';
            } else if (route.name === 'Register') {
              iconName = 'account-plus';
            } else if (route.name === 'Login') {
              iconName = 'login';
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        // tabBarOptions={{
        //   activeTintColor: 'tomato',
        //   inactiveTintColor: 'gray',
        // }}
      >
        <Tab.Screen name="Workouts" component={Workouts} />
        <Tab.Screen name="Register" component={RegisterForm} />
        <Tab.Screen name="Login" component={LoginForm} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

