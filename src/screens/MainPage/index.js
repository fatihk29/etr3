import React from 'react';
import {FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import DATA from '../../../data/dummy-data';
import ListItem from '../../components/ListItem';

function MainPage({navigation}) {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();
  return (
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
  );
}

export default MainPage;
