import React from 'react';
import {Text, View, FlatList} from 'react-native';
import DATA from '../../../data/dummy-data';
import ListItem from '../../components/ListItem';

function MainPage() {
  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => {
        return <ListItem name={item.name} avatar={item.avatar} />;
      }}
      keyExtractor={item => item.id}
    />
  );
}

export default MainPage;
