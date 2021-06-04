import React, {useState} from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './style';

function AddNewChar({navigation}) {
  const [enteredText, setEnteredText] = useState({
    id: '',
    name: '',
    job: '',
    about: '',
    avatar: '',
  });

  function onPressAddNewCharBtn() {
    const id = JSON.stringify(Math.floor(Math.random() * 100000));
    enteredText.id = id;
    saveData(id, enteredText);
    setEnteredText({
      id: '',
      name: '',
      job: '',
      about: '',
      avatar: '',
    });
    navigation.push('MainPage');
  }

  const saveData = async id => {
    try {
      await AsyncStorage.setItem(id, JSON.stringify(enteredText));
      // Alert.alert('The Record successfully saved.');
    } catch (e) {
      Alert.alert('Failed to save the data to the storage');
    }
  };

  // const readData = async () => {
  //   try {
  //     let lists = [];
  //     const result = {};
  //     const keys = await AsyncStorage.getAllKeys();
  //     for (const key of keys) {
  //       const val = await AsyncStorage.getItem(key);
  //       result[key] = val;
  //       lists.push(JSON.parse(result[key]));
  //     }
  //     return result;
  //   } catch (error) {
  //     Alert.alert(error);
  //   }
  // };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleText}>Name Surname:</Text>
      <TextInput
        placeholder="Name"
        style={styles.textinputName}
        onChangeText={text => setEnteredText({...enteredText, name: text})}
        value={enteredText.name}
      />
      <Text style={styles.titleText}>Job:</Text>
      <TextInput
        placeholder="Job"
        style={styles.textinputJob}
        onChangeText={text => setEnteredText({...enteredText, job: text})}
        value={enteredText.job}
      />
      <Text style={styles.titleText}>About</Text>
      <TextInput
        placeholder="About"
        style={styles.textinputAbout}
        onChangeText={text => setEnteredText({...enteredText, about: text})}
        value={enteredText.about}
      />
      <Text style={styles.titleText}>Link</Text>
      <TextInput
        placeholder="Link"
        style={styles.textinputLink}
        onChangeText={text => setEnteredText({...enteredText, avatar: text})}
        value={enteredText.avatar}
      />
      <TouchableOpacity
        onPress={onPressAddNewCharBtn}
        style={styles.addNewCharBtn}>
        <Text style={styles.addNewCharBtnText}>Add New Character</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default AddNewChar;
