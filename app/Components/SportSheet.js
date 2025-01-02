import React, { forwardRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Bike, Running, Walk, Mountain, Timer } from 'lucide-react-native';

const SportSheet = forwardRef((props, ref) => {
  const sports = [
    {
      icon: <Bike size={24} color="#666666" />,
      name: 'Ride',
      isSelected: false,
      onPress: () => {},
    },
    {
      icon: <Running size={24} color="#FF4B4B" />,
      name: 'Run',
      isSelected: true,
      onPress: () => {},
    },
    {
      icon: <Walk size={24} color="#666666" />,
      name: 'Walk',
      isSelected: false,
      onPress: () => {},
    },
    {
      icon: <Mountain size={24} color="#666666" />,
      name: 'Hike',
      isSelected: false,
      onPress: () => {},
    },
    {
      icon: <Timer size={24} color="#666666" />,
      name: 'Trail Run',
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
        <Text style={styles.title}>Choose a sport</Text>
        {sports.map((sport, index) => (
          <TouchableOpacity
            key={index}
            style={styles.sportItem}
            onPress={sport.onPress}
          >
            {sport.icon}
            <Text style={[
              styles.sportName,
              sport.isSelected && styles.sportNameSelected
            ]}>
              {sport.name}
            </Text>
            {sport.isSelected && (
              <View style={styles.checkmark} />
            )}
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
  sportItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  sportName: {
    flex: 1,
    fontSize: 16,
    color: '#666666',
  },
  sportNameSelected: {
    color: '#FF4B4B',
    fontWeight: '500',
  },
  checkmark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FF4B4B',
  },
});

export default SportSheet;

