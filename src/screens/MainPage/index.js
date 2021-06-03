import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import DATA from '../../../data/dummy-data';
import ListItem from '../../components/ListItem';
import style from './style';

function MainPage({navigation}) {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  function onPressAddBtn() {
    navigation.navigate('AddNewChar');
  }

  return (
    <View style={style.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => {
          return (
            <ListItem
              name={item.name}
              avatar={item.avatar}
              itemId={item.id}
              navigation={navigation}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
      <View style={style.addBtnContainer}>
        <View style={style.addBtn}>
          <TouchableOpacity onPress={onPressAddBtn}>
            <IconMCI name="plus" size={35} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default MainPage;
