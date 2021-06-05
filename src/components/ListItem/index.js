import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';

const ListItem = props => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.itemLeftContainer}
        onPress={() => {
          props.navigation.navigate('DetailPage', {itemId: props.itemId});
        }}>
        <View style={styles.itemImageContainer}>
          {props.avatar ? (
            <Image source={{uri: props.avatar}} style={styles.image} />
          ) : null}
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{props.name}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemRightContainer}
        onPress={props.onPressDelete}>
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
    borderBottomWidth: 0.4,
    borderBottomColor: 'gray',
  },
  itemLeftContainer: {
    flex: 13,
    flexDirection: 'row',
  },
  itemRightContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImageContainer: {
    flex: 2,
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
