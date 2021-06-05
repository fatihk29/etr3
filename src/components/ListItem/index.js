import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

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
          ) : (
            <IconMCI name="image-off-outline" size={20} style={styles.icon} />
          )}
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

export default ListItem;
