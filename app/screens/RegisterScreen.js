import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      // Step 1: Register the user
      const registerResponse = await axios.post('http://192.168.0.106:3001/user/register', {
        username,
        password,
        email,
      });

      if (registerResponse.status === 201 || registerResponse.status === 200) {
        // Step 2: Automatically log in after successful registration
        const loginResponse = await axios.post('http://192.168.0.106:3001/auth/login', {
          username,
          password,
        });

        const token = loginResponse.data.access_token;

        // Step 3: Display success message and navigate to Home
        Alert.alert('Success', 'Account Created and Logged In!', [
          {
            text: 'OK',
            onPress: () => {
              console.log('Token:', token); // Log the token to console
              navigation.replace('Home'); // Navigate to Home screen
            },
          },
        ]);
      }
    } catch (error) {
      console.error('Registration or Login Error:', error);
      Alert.alert('Error', 'Registration or Login Failed. Please try again.');
    }
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
      <TouchableOpacity style={styles.signupButton} onPress={handleRegister}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
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
