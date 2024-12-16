import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Make progress toward goals.</Text>

      <TouchableOpacity style={styles.joinButton} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.joinButtonText}>Join for free</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
    color: 'black',
  },
  joinButton: {
    backgroundColor: '#fc5200',
    width: '100%',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
  },
  joinButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#fc5200',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LandingScreen;
