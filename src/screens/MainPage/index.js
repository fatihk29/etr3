import React, {useState, useEffect} from 'react';
import {View, FlatList, TouchableOpacity, Alert} from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import DATA from '../../../data/dummy-data';
import ListItem from '../../components/ListItem';
import style from './style';

const saveData = async item => {
  try {
    await AsyncStorage.setItem(item.id, JSON.stringify(item));
    // Alert.alert('The Record successfully saved.');
  } catch (e) {
    Alert.alert('Failed to save the data to the storage');
  }
};

function saveInitialDataToStorage(data) {
  data.map((item, _) => {
    saveData(item);
  });
}

saveInitialDataToStorage(DATA);

function MainPage({navigation}) {
  const [recordedData, setRecordedData] = useState();
  // const products = useSelector(state => state.products.availableProducts);
  // const dispatch = useDispatch();

  function onPressAddBtn() {
    navigation.navigate('AddNewChar');
  }

  useEffect(() => {
    const storage = async () => {
      let items = await readData();
      setRecordedData(items);
    };
    storage();
  }, [navigation]);

  const readData = async () => {
    try {
      let lists = [];
      const result = {};
      const keys = await AsyncStorage.getAllKeys();
      for (const key of keys) {
        const val = await AsyncStorage.getItem(key);
        result[key] = val;
        lists.push(JSON.parse(result[key]));
      }
      return lists;
    } catch (error) {
      Alert.alert(error);
    }
  };

  function onPressDelete(key) {
    navigation.push('MainPage');
    removeItem(key);
  }

  async function removeItem(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  }

  return (
    <View style={style.container}>
      <FlatList
        data={recordedData}
        renderItem={({item}) => {
          return (
            <ListItem
              name={item.name}
              avatar={item.avatar}
              itemId={item.id}
              navigation={navigation}
              onPressDelete={() => onPressDelete(item.id)}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
      <View style={style.addBtnContainer}>
        <View style={style.addBtn}>
          <TouchableOpacity onPress={onPressAddBtn}>
            <IconMCI name="plus" size={35} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default MainPage;
