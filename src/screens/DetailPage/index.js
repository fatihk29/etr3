import React from 'react';
import {Text, View, ScrollView, Image, Alert} from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './style';

function DetailPage(props) {
  const {itemId} = props.route.params;

  const readData = async getSelectedItemID => {
    try {
      const getSelectedItem = await AsyncStorage.getItem(getSelectedItemID);
      // console.log('33--', getSelectedItem);
      return getSelectedItem;
    } catch (error) {
      Alert.alert(error);
    }
  };
  readData(itemId);
  // Do Not Forget import expression above !!!!
  // const selecteditemId = useSelector(state =>
  //   state.products.availableProducts.find(prod => prod.id === itemId),
  // );
  // const dispatch = useDispatch();
  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: selecteditemId.avatar}} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{selecteditemId.name}</Text>
      </View>
      <View style={styles.jobContainer}>
        <Text style={styles.job}>{selecteditemId.job}</Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text style={styles.about}>{selecteditemId.about}</Text>
      </View> */}
    </ScrollView>
  );
}

export default DetailPage;
