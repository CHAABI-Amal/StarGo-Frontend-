import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import colors from '../utils/colors';

const InputField = ({ placeholder }) => {
  return <TextInput style={styles.input} placeholder={placeholder} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.gray, // Utilisation correcte
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
});

export default InputField;
