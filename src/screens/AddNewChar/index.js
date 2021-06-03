import React, {useState} from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './style';

function AddNewChar() {
  const [enteredText, setEnteredText] = useState({
    id: '',
    name: '',
    job: '',
    about: '',
    avatar: '',
  });

  function onPressAddNewCharBtn() {
    console.log('14AA', 'pressed');

    setEnteredText({
      id: '',
      name: '',
      job: '',
      about: '',
      avatar: '',
    });
  }

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, age);
      alert('Data successfully saved');
    } catch (e) {
      alert('Failed to save the data to the storage');
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
