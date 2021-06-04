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
  function HeaderMidTitle({title}) {
    return (
      <View style={style.midHeader}>
        <Text style={style.midHeaderText}>{title}</Text>
      </View>
    );
  }

  function HeaderLeftTitle({navigation}) {
    return (
      <View style={style.leftHeaderContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.leftHeader}>
          <View style={style.subContainer}>
            <IconFA5 name="angle-left" size={20} color="#6495ED" />
            <Text style={style.leftHeaderText}>Simpsons</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={() => ({
            headerTitle: () => <HeaderMidTitle title={'Simpsons'} />,
          })}
        />
        <Stack.Screen
          name="DetailPage"
          component={DetailPage}
          options={({navigation}) => ({
            headerTitle: () => <HeaderMidTitle title={'Detail'} />,
            headerLeft: () => <HeaderLeftTitle navigation={navigation} />,
            headerRight: () => <View />,
          })}
        />
        <Stack.Screen
          name="AddNewChar"
          component={AddNewChar}
          options={({navigation}) => ({
            headerTitle: () => <HeaderMidTitle title={'Add New Character'} />,
            headerLeft: () => (
              <View style={style.leftHeaderContainer}>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={style.leftHeader}>
                  <View style={style.subContainer}>
                    <IconFA5 name="angle-left" size={20} color="#6495ED" />
                    <Text style={style.leftHeaderText}>Simpsons</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ),
            headerRight: () => <View />,
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
  },
  midHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  leftHeader: {
    marginLeft: 10,
  },
  leftHeaderText: {
    marginLeft: 3,
    color: '#6495ED',
  },
  subContainer: {
    flexDirection: 'row',
  },
});

export default StackNavigator;
