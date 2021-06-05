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
    createdDate: '',
  });

  function onPressAddNewCharBtn() {
    enteredText.id = JSON.stringify(Math.floor(Math.random() * 100000));
    enteredText.createdDate = new Date();
    if (enteredText.link === undefined) {
      enteredText.link =
        'https://static.wikia.nocookie.net/simpsons/images/1/18/Herb_Powelll.png/revision/latest/scale-to-width-down/192?cb=20200708052654';
    }
    console.log('29', enteredText);
    saveData(enteredText.id, enteredText);
    //Clean all TextInputs
    setEnteredText({
      id: '',
      name: '',
      job: '',
      about: '',
      avatar: '',
      date: '',
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
