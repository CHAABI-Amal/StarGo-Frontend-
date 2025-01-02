import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const activities = [
  { id: 'run', name: 'Run', icon: 'run' },
  { id: 'ride', name: 'Ride', icon: 'bike' },
  { id: 'walk', name: 'Walk', icon: 'walk' },
  { id: 'hike', name: 'Hike', icon: 'hiking' },
  { id: 'swim', name: 'Swim', icon: 'swim' },
  { id: 'crossfit', name: 'Crossfit', icon: 'weight-lifter' },
  { id: 'elliptical', name: 'Elliptical', icon: 'ellipse' },
  { id: 'golf', name: 'Golf', icon: 'golf' },
  { id: 'kayak', name: 'Kayak', icon: 'kayaking' },
];

export default function SportSelectionScreen() {
  // Initialize with an empty set for unselected activities
  const [selectedActivities, setSelectedActivities] = useState(new Set());

  const navigation = useNavigation(); // Initialize navigation

  const toggleActivity = (id) => {
    const newSelected = new Set(selectedActivities);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedActivities(newSelected);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Which sports are you interested in?</Text>
          <Text style={styles.subtitle}>
            Here's a peek at what Strava has to offer. When it's time to record an activity, you can choose from over 30 sport types.
          </Text>
        </View>

        <View style={styles.activitiesList}>
          {activities.map((activity) => (
            <TouchableOpacity
              key={activity.id}
              style={[
                styles.activityButton,
                selectedActivities.has(activity.id) && styles.activityButtonSelected,
              ]}
              onPress={() => toggleActivity(activity.id)}
            >
              <Icon
                name={activity.icon}
                size={24}
                color={selectedActivities.has(activity.id) ? '#FF5722' : '#000'}
                style={styles.activityIcon}
              />
              <Text
                style={[
                  styles.activityText,
                  selectedActivities.has(activity.id) && styles.activityTextSelected,
                ]}
              >
                {activity.name}
              </Text>
              {selectedActivities.has(activity.id) && (
                <Icon name="check" size={24} color="#FF5722" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.replace('Home')} // Navigate to Home screen
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomNav}>
        <Icon name="menu" size={24} color="#666" />
        <Icon name="checkbox-blank-outline" size={24} color="#666" />
        <Icon name="chevron-left" size={24} color="#666" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  activitiesList: {
    padding: 16,
  },
  activityButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  activityButtonSelected: {
    backgroundColor: '#FFF3EF',
    borderColor: '#FF5722',
  },
  activityIcon: {
    marginRight: 16,
  },
  activityText: {
    fontSize: 18,
    flex: 1,
  },
  activityTextSelected: {
    color: '#FF5722',
  },
  continueButton: {
    backgroundColor: '#FF5722',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
