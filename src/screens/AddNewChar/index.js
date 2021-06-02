import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './style';

function AddNewChar() {
  const [enteredText, setEnteredText] = useState({
    name: '',
    avatar: '',
    job: '',
    about: '',
  });

  return (
    <View style={styles.container}>
      <Text>Name Surname</Text>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={text => setEnteredText({...enteredText, name: text})}
        value={enteredText.name}
      />
      <Text>Job</Text>
      <Text>About</Text>
      <Text>Link</Text>
    </View>
  );
}

export default AddNewChar;
