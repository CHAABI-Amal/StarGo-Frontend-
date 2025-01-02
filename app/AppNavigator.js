import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

// Importation des écrans
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import GoalSettingScreen from './screens/GoalSettingScreen'; // Update the path if necessary
import SportSelectionScreen from './screens/SportSelectionScreen';
import YouScreen from './screens/YouScreen';
import SetGoalScreen from "./screens/SetGoalScreen";
import ActivityScreen from "./screens/ActivityScreen";


// Création des navigateurs
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        switch (route.name) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Maps':
            iconName = 'map-marked-alt';
            break;
          case 'Record':
            iconName = 'record-vinyl';
            break;
          case 'Groups':
            iconName = 'users';
            break;
          case 'You':
            iconName = 'user';
            break;
        }

        return <FontAwesome5 name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#fc5200',
      tabBarInactiveTintColor: '#999',
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Maps" component={MapScreen} />
    <Tab.Screen name="Record" component={RegisterScreen} />
    <Tab.Screen name="Groups" component={LandingScreen} />
    <Tab.Screen name="You" component={YouScreen} />
  </Tab.Navigator>
);

// Stack Navigator
const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="GoalSettingScreen" component={GoalSettingScreen} />
      <Stack.Screen name="SportSelectionScreen" component={SportSelectionScreen} />
      <Stack.Screen name="SetGoalScreen" component={SetGoalScreen} />
      <Stack.Screen name="ActivityScreen" component={ActivityScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>

);


export default AppNavigator;
