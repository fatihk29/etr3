import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
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
            headerTitle: () => (
              <View style={style.midHeader}>
                <Text style={style.midHeaderText}>Add New Char</Text>
              </View>
            ),
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={style.leftHeader}>
                <View style={{flexDirection: 'row'}}>
                  <IconFA5 name="angle-left" size={20} color="blue" />
                  <Text style={style.leftHeaderText}>Simpsons</Text>
                </View>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  midHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  midHeaderText: {
    fontSize: 20,
  },
  leftHeader: {
    position: 'relative',
    marginLeft: 5,
  },
  leftHeaderText: {
    color: 'blue',
    zIndex: 1,
  },
});

export default StackNavigator;
