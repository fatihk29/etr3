import React from 'react';
import {FlatList} from 'react-native';
import DATA from '../../../data/dummy-data';
import ListItem from '../../components/ListItem';

function MainPage({navigation}) {
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
