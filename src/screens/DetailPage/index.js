import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

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
        <Image style={styles.image} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  nameContainer: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
  },
  jobContainer: {
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  job: {
    fontSize: 18,
    color: 'gray',
  },
  aboutContainer: {
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  about: {
    fontSize: 18,
    color: 'gray',
  },
});
export default DetailPage;
