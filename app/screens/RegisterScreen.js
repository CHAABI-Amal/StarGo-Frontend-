import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { register, login } from '../Redux/actions/authActions';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { loading, error, registered } = useSelector((state) => state.auth);

  const handleRegister = () => {
    // Dispatch the register action
    dispatch(register(email, username, password))
      .then(() => {
        if (registered) {
          // If registration is successful, log in automatically
          dispatch(login(username, password))
            .then(() => {
              Alert.alert('Success', 'Account Created and Logged In!', [
                {
                  text: 'OK',
                  onPress: () => navigation.replace('SportSelectionScreen'),
                },
              ]);
            })
            .catch(() => {
              Alert.alert('Error', 'Login failed after registration.');
            });
        }
      })
      .catch(() => {
        Alert.alert('Error', error || 'Registration failed.');
      });
  };

  return (
    <View style={styles.container}>
      {/* Close Icon */}
      <TouchableOpacity style={styles.closeIcon} onPress={() => navigation.goBack()}>
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Create an Account</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Sign Up Button */}
      <TouchableOpacity
        style={styles.signupButton}
        onPress={handleRegister}
        disabled={loading}
      >
        <Text style={styles.signupButtonText}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    marginTop: 30,
  },
  closeIcon: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: '#fc5200',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  signupButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default RegisterScreen;
