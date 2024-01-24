// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';  // Update import path
import NameList from './components/NameList';

const Stack = createStackNavigator();

export default function App() {
  const names = [
    { prenom: 'Devin' },
    { prenom: 'Dan' },
    { prenom: 'Dominic' },
    { prenom: 'Jackson' },
    { prenom: 'James' },
    { prenom: 'Joel' },
    { prenom: 'John' },
    { prenom: 'Jillian' },
    { prenom: 'Jimmy' },
    { prenom: 'Julie' },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NameList">
          {(props) => <NameList {...props} names={names} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
