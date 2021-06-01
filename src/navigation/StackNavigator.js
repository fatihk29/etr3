import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainPage from '../screens/MainPage';
import DetailPage from '../screens/DetailPage';
import AddNewChar from '../screens/AddNewChar';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="DetailPage" component={DetailPage} />
        <Stack.Screen name="AddNewChar" component={AddNewChar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
