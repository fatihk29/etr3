import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';

function AddNewChar() {
  const [enteredText, setEnteredText] = useState({
    name: '',
    job: '',
    about: '',
    avatar: '',
  });

  function onPressAddNewCharBtn() {
    console.log('14AA', 'pressed');
  }

  return (
    <View style={styles.container}>
      <Text>Name Surname:</Text>
      <TextInput
        placeholder="Name"
        style={styles.textinputName}
        onChangeText={text => setEnteredText({...enteredText, name: text})}
        value={enteredText.name}
      />
      <Text>Job:</Text>
      <TextInput
        placeholder="Job"
        style={styles.textinputJob}
        onChangeText={text => setEnteredText({...enteredText, job: text})}
        value={enteredText.job}
      />
      <Text>About</Text>
      <TextInput
        placeholder="About"
        style={styles.textinputAbout}
        onChangeText={text => setEnteredText({...enteredText, about: text})}
        value={enteredText.about}
      />
      <Text>Link</Text>
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
    </View>
  );
}

export default AddNewChar;
