import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const YouScreen = () => {
  // Sample data for the progress chart
  const progressData = {
    labels: ['NOV', 'DEC', 'JAN'],
    datasets: [{
      data: [0, 0, 0],
    }]
  };

  // Weekly stats data
  const weeklyStats = [
    { label: 'Distance', value: '0 km' },
    { label: 'Time', value: '0m' },
    { label: 'Elev Gain', value: '0 m' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>You</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>A</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="magnify" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="cog" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Activities</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Progress Header */}
        <View style={styles.progressHeader}>
          <Text style={styles.progressTitle}>View Your Progress Here</Text>
          <Text style={styles.progressSubtitle}>
            See your weekly activities at a glance, and know how your efforts are adding up
          </Text>
        </View>

        {/* Run Button */}
        <TouchableOpacity style={styles.runButton}>
          <Icon name="run" size={24} color="#FF4500" />
          <Text style={styles.runButtonText}>Run</Text>
        </TouchableOpacity>

        {/* This Week Stats */}
        <View style={styles.weeklyStatsContainer}>
          <Text style={styles.weekTitle}>This week</Text>
          <View style={styles.statsGrid}>
            {weeklyStats.map((stat, index) => (
              <View key={index} style={styles.statItem}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Progress Chart */}
        <View style={styles.chartContainer}>
          <LineChart
            data={progressData}
            width={350}
            height={200}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 69, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={styles.chart}
          />
        </View>

        {/* Unlock More Section */}
        <View style={styles.unlockSection}>
          <Text style={styles.unlockTitle}>Unlock more ways to track your progress.</Text>
        </View>
      </ScrollView>

  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 16,
  },
  avatarCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#8B4513',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  tab: {
    paddingVertical: 12,
    marginRight: 24,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF4500',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#000',
    fontWeight: '500',
  },
  content: {
    flex: 1,
  },
  progressHeader: {
    padding: 16,
  },
  progressTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  progressSubtitle: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  runButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#FF4500',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    marginLeft: 16,
    marginVertical: 16,
  },
  runButtonText: {
    color: '#FF4500',
    marginLeft: 8,
    fontSize: 16,
  },
  weeklyStatsContainer: {
    padding: 16,
  },
  weekTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'flex-start',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  chartContainer: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  unlockSection: {
    padding: 16,
  },
  unlockTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    backgroundColor: '#FFF',
  },
  navItem: {
    padding: 8,
  },
});

export default YouScreen;