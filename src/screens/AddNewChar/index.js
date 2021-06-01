import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './style';

function AddNewChar() {
  return (
    <View style={styles.container}>
      <Text>Name Surname</Text>
      <TextInput
        style={styles.input}
        // onChangeText={}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Text>Job</Text>
      <Text>About</Text>
      <Text>Link</Text>
    </View>
  );
}

export default AddNewChar;
