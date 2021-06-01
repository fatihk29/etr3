import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styles from './style';

function DetailPage(props) {
  const {itemId} = props.route.params;
  console.log('7', itemId);
  const selecteditemId = useSelector(state =>
    state.products.availableProducts.find(prod => prod.id === itemId),
  );
  const dispatch = useDispatch();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
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
      </View>
    </ScrollView>
  );
}

export default DetailPage;
