import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import MyMapboxViewer from '../Components/MyMapboxViewer';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

const menuOptions = [
  { name: 'Routes', id: 'routes' },
  { name: 'Length', id: 'length' },
  { name: 'Difficulty', id: 'difficulty' },
  { name: 'Elevation', id: 'elevation' },
];

const bottomSheetOptions = [
  { name: 'Routes', description: 'Route recommendations powered by community data.' },
  { name: 'Segments', description: 'Sections of roads and trails highlighted by the community.' },
  { name: 'Map only', description: 'Explore heatmaps, points of interest with a clean slate.' },
];

// Mock Data for Search Functionality
const mockLocations = [
  'Mohammedia',
  'Casablanca',
  'Rabat',
  'Marrakech',
  'Tanger',
  'Agadir',
  'Essaouira',
];

const MapScreen = () => {
  const navigation = useNavigation(); // Use navigation hook for screen navigation
  const [searchText, setSearchText] = useState('');
  const [filteredLocations, setFilteredLocations] = useState(mockLocations);
 const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Routes');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSport, setSelectedSport] = useState('Run');
// AJOUTE CETTE LIGNE
const [activeTab, setActiveTab] = useState('Maps');
  // Handle Search Functionality
  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = mockLocations.filter((location) =>
      location.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredLocations(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.menuButton}>
          <FontAwesome5 name="running" size={20} color="#fc5200" />
          <Text style={styles.menuText}>{selectedSport}</Text>
          <AntDesign name="down" size={16} color="#333" />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <AntDesign name="search1" size={20} color="#999" />
          <TextInput
            placeholder="Search locations"
            value={searchText}
            onChangeText={handleSearch}
            style={styles.searchInput}
          />
        </View>
      </View>
      
      
      {/* Search Results */}
      {searchText.length > 0 && (
        <View style={styles.searchResults}>
          <FlatList
            data={filteredLocations}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Text style={styles.searchResultItem}>{item}</Text>
            )}
          />
        </View>
      )}

{/* Spacer between Search Bar and Filters */}
<View style={styles.spacer} />

{/* Updated Floating Filters with horizontal scrolling */}
<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  style={styles.horizontalFilterContainer}
>
  {menuOptions.map((item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.filterButton}
      onPress={() => item.id === 'routes' && setBottomSheetVisible(true)}
    >
      <Text style={styles.filterText}>{item.name}</Text>
      {item.id === 'routes' && <AntDesign name="down" size={12} color="#fc5200" />}
    </TouchableOpacity>
  ))}
</ScrollView>


          {/* Map Section */}
          <View style={styles.mapContainer}>
        <MyMapboxViewer searchQuery={searchText} />
        
        {/* Button on the Map */}
        <TouchableOpacity
          style={styles.mapButton}
          onPress={() => navigation.navigate('GoalSettingScreen')} // Navigate to GoalSettingScreen
        >
          <Text style={styles.mapButtonText}>Set Goal</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Sheet for Routes */}
      <Modal visible={bottomSheetVisible} transparent animationType="slide">
        <View style={styles.bottomSheet}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Choose map features</Text>
            <TouchableOpacity onPress={() => setBottomSheetVisible(false)}>
              <AntDesign name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          {bottomSheetOptions.map((option) => (
            <TouchableOpacity
              key={option.name}
              style={styles.optionItem}
              onPress={() => setSelectedOption(option.name)}
            >
              <View style={styles.optionContent}>
                <AntDesign
                  name={selectedOption === option.name ? 'checkcircle' : 'checkcircleo'}
                  size={20}
                  color={selectedOption === option.name ? '#fc5200' : '#ccc'}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.optionTitle}>{option.name}</Text>
                  <Text style={styles.optionDescription}>{option.description}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>

      {/* Bottom Sheet for Sport Selection */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.bottomSheet}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Choose a sport</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <AntDesign name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={['Ride', 'Run', 'Walk']}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.optionItem}
                onPress={() => {
                  setSelectedSport(item);
                  setModalVisible(false);
                }}
              >
                <FontAwesome5
                  name={item === 'Ride' ? 'bicycle' : item === 'Run' ? 'running' : 'walking'}
                  size={20}
                  color={item === selectedSport ? '#fc5200' : '#555'}
                />
                <Text
                  style={[
                    styles.optionText,
                    { color: item === selectedSport ? '#fc5200' : '#555' },
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 30,
  },
  menuButton: { flexDirection: 'row', alignItems: 'center', marginRight: 10 },
  menuText: { fontSize: 16, color: '#333', marginHorizontal: 5 },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: '#333',
  },
  searchResults: {
    backgroundColor: '#fff',
    padding: 10,
    maxHeight: 120,
  },
  searchResultItem: {
    paddingVertical: 5,
    color: '#333',
  },
  spacer: { height: 2 },
  filterContainer: {
    position: 'absolute',
    top: 80,
    left: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  horizontalFilterContainer: {
    marginTop: 10,
    paddingHorizontal: 5,
  },
  filterButton: {
    backgroundColor: '#fff',
    width: 100, // Fixed width
    height: 40, // Fixed height
    borderRadius: 8, // Reduced border radius for a more rectangular shape
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 8, // Space between buttons
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    elevation: 3, // Shadow for Android
  },
  filterText: {
    color: '#333',
    fontWeight: '500',
    fontSize: 14, // Adjust font size for better fit
  },
  

  filterText: { color: '#333', fontWeight: '500', fontSize: 12, marginRight: 5 },
  mapContainer: { flex: 100 },
  bottomSheet: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    elevation: 5,
    color: '#333',
    fontWeight: '500',
    fontSize: 14, // Slightly larger font for readability
    marginRight: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  modalTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  optionItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mapButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#fc5200', // Orange background
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  mapButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tabButton: { alignItems: 'center' },
  tabText: { fontSize: 12, color: '#999', marginTop: 15 },  
  optionTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  optionDescription: { fontSize: 12, color: '#555' },
  optionText: { marginLeft: 10, fontSize: 16 },
});

export default MapScreen;
