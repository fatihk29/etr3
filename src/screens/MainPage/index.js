import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import DATA from '../../../data/dummy-data';
import ListItem from '../../components/ListItem';
import styles from './style';

function MainPage({navigation}) {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();
  return (
    <View>
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
      <View style={styles.addBtn}>
        <TouchableOpacity style={{}}>
          <IconMCI name="plus" size={35} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MainPage;
