import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../utils/colors';

const AuthButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 16,
  },
});

export default AuthButton;
