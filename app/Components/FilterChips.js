import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

const FilterChips = ({ filters }) => {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {filters.map((filter, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.chip,
            filter.isSelected && styles.selectedChip
          ]}
          onPress={filter.onPress}
        >
          <Text style={[
            styles.chipText,
            filter.isSelected && styles.selectedChipText
          ]}>
            {filter.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectedChip: {
    backgroundColor: '#FF4B4B',
    borderColor: '#FF4B4B',
  },
  chipText: {
    color: '#666666',
  },
  selectedChipText: {
    color: 'white',
  },
});

export default FilterChips;
