import React, { forwardRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Map, Crown, User } from 'lucide-react-native';

const MapFeatureSheet = forwardRef((props, ref) => {
  const features = [
    {
      icon: <Map size={24} color="#666666" />,
      title: 'Routes',
      description: 'Route recommendations powered by community data.',
      isSelected: true,
      onPress: () => {},
    },
    {
      icon: <Crown size={24} color="#666666" />,
      title: 'Segments',
      description: 'Sections of roads and trails highlighted by the Strava community.',
      isSelected: false,
      onPress: () => {},
    },
    {
      icon: <User size={24} color="#666666" />,
      title: 'Map only',
      description: 'Explore heatmaps, points of interest and other details with a clean slate.',
      isSelected: false,
      onPress: () => {},
    },
  ];

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={['50%']}
      index={0}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Choose map features</Text>
        {features.map((feature, index) => (
          <TouchableOpacity
            key={index}
            style={styles.featureItem}
            onPress={feature.onPress}
          >
            {feature.icon}
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>{feature.description}</Text>
            </View>
            <View style={[
              styles.radioButton,
              feature.isSelected && styles.radioButtonSelected
            ]} />
          </TouchableOpacity>
        ))}
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  featureDescription: {
    fontSize: 14,
    color: '#666666',
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  radioButtonSelected: {
    borderColor: '#FF4B4B',
    backgroundColor: '#FF4B4B',
  },
});

export default MapFeatureSheet;

