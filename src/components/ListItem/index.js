import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

const ListItem = props => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.itemLeftContainer}
        onPress={() => {
          console.log('sss1');
        }}>
        <View style={styles.itemImageContainer}>
          <Image source={{uri: props.avatar}} style={styles.image} />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{props.name}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemRightContainer}
        onPress={() => {
          console.log('sss2');
        }}>
        <Text>ss</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    marginHorizontal: 10,
    marginVertical: 5,
    // backgroundColor: 'red',
  },
  itemLeftContainer: {
    flex: 13,
    flexDirection: 'row',
    // backgroundColor: 'blue',
  },
  itemRightContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  itemImageContainer: {
    flex: 2,
    // backgroundColor: 'yellow',
  },
  nameContainer: {
    flex: 8,
    justifyContent: 'center',
    marginLeft: 5,
  },
  name: {
    fontSize: 22,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});

export default ListItem;
