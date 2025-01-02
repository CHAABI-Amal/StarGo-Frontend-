import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Full-Screen Image */}
      <Image source={require('../../assets/images/starva.png')} style={styles.image} />

      {/* Content Area */}
      <View style={styles.content}>
        <Text style={styles.title}>Make progress toward goals.</Text>

        <TouchableOpacity style={styles.joinButton} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.joinButtonText}>Join for free</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: screenWidth,  // Full screen width
    height: screenHeight * 0.6,  // 60% of screen height
    resizeMode: 'cover', // Cover the area
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 30,
    color: 'black',
  },
  joinButton: {
    backgroundColor: '#fc5200',
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
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
