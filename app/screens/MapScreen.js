import React from 'react';
import { View, StyleSheet } from 'react-native';
import MyMapboxViewer from '../Components/MyMapboxViewer'; // Import MyMapboxViewer component

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MyMapboxViewer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
