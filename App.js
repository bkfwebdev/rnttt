// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import MainScreen from './components/mainscreen';
import GameBoard from './components/gameboard';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Tic Tac Toe Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {
          title: 'Login',
          headerLeft: null
          }
        }
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         { title: 'Dashboard', 
         headerLeft: null} 
       }
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
      />
      <Stack.Screen
      name = "GameBoard"
      component = {GameBoard}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
