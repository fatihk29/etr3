import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainPage from '../screens/MainPage';
import DetailPage from '../screens/DetailPage';
import AddNewChar from '../screens/AddNewChar';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="DetailPage" component={DetailPage} />
        <Stack.Screen
          name="AddNewChar"
          component={AddNewChar}
          options={({navigation}) => ({
            headerTitle: () => <Text>Add New Char</Text>,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{marginLeft: 10}}>
                <View style={{flexDirection: 'row'}}>
                  <IconFA5 name="angle-left" size={20} />
                  <Text style={{color: 'blue'}}>Simpsonss</Text>
                </View>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
