// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import VideoScreen from './src/screens/VideoScreen';
import { theme } from './src/utils/theme'; // Importer les thèmes

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.navbar.backgroundColor, // Couleur de fond de la barre de navigation
          },
          headerTintColor: theme.navbar.textColor, // Couleur du texte dans la barre de navigation
          headerTitleStyle: {
            fontSize: theme.fontSize.large, // Taille du titre
            fontWeight: 'bold',
          },
          headerBackTitleStyle: {
            color: theme.navbar.buttonColor, // Couleur du texte du bouton retour
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Video" component={VideoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
