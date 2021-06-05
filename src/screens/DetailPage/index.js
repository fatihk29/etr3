import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, Image, Alert} from 'react-native';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
// import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './style';

function DetailPage(props) {
  const {itemId} = props.route.params;
  const [selectedItem, setSelectedItem] = useState({});

  const readData = async itemId_ => {
    try {
      const value = await AsyncStorage.getItem(itemId_);
      setSelectedItem(JSON.parse(value));
    } catch (error) {
      Alert.alert(error);
    }
  };

  useEffect(() => {
    readData(itemId);
  }, [itemId]);

  // Do Not Forget import expression above !!!!
  // const selecteditemId = useSelector(state =>
  //   state.products.availableProducts.find(prod => prod.id === itemId),
  // );
  // const dispatch = useDispatch();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        {selectedItem.avatar ? (
          <Image style={styles.image} source={{uri: selectedItem.avatar}} />
        ) : (
          <View style={styles.image}>
            <IconMCI name="image-off-outline" size={100} />
          </View>
        )}
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{selectedItem.name}</Text>
      </View>
      <View style={styles.jobContainer}>
        <Text style={styles.job}>{selectedItem.job}</Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text style={styles.about}>{selectedItem.about}</Text>
      </View>
    </ScrollView>
  );
}

export default DetailPage;
