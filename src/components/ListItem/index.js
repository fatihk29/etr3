import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';

const ListItem = props => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.itemLeftContainer}
        onPress={() => {
          props.navigation.navigate('Detail');
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
        <IconFA5 name="trash" size={20} />
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
    borderBottomWidth: 0.4,
    borderBottomColor: 'gray',
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
