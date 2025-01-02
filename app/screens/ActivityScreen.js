import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const ActivityScreen = ({ route, navigation }) => {
  const { goalType, goalValue } = route.params;

  const [selectedSport, setSelectedSport] = useState("Run");
  const [modalVisible, setModalVisible] = useState(false);

  // Function to calculate distance from calories
  const calculateDistance = (calories) => {
    const caloriesPerKm = 70; // Example: 70 calories burned per km
    return (calories / caloriesPerKm).toFixed(2); // Convert to km
  };

  const distance =
    goalType === "distance" ? goalValue : calculateDistance(goalValue);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Activity Details</Text>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{new Date().toLocaleDateString()}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Time:</Text>
        <Text style={styles.value}>{new Date().toLocaleTimeString()}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Activity Type:</Text>
        <TouchableOpacity
          style={styles.value}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.value}>{selectedSport}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>
          {goalType === "distance" ? "Distance:" : "Calories:"}
        </Text>
        <Text style={styles.value}>
          {goalType === "distance" ? `${distance} km` : `${goalValue} calories`}
        </Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Calculated Distance:</Text>
        <Text style={styles.value}>{distance} km</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.actionButton, styles.backButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.actionButtonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.actionButton, styles.nextButton]}
            onPress={() => navigation.navigate("HomeScreen", { showTrackingDialog: true })}
            >
        <Text style={styles.actionButtonText}>Next</Text>
        </TouchableOpacity>

      </View>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={["Ride", "Run", "Walk"]}
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
                    name={
                      item === "Ride"
                        ? "bicycle"
                        : item === "Run"
                        ? "running"
                        : "walking"
                    }
                    size={20}
                    color={item === selectedSport ? "#fc5200" : "#555"}
                  />
                  <Text
                    style={[
                      styles.optionText,
                      { color: item === selectedSport ? "#fc5200" : "#555" },
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 35,
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
    color: "#555",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  backButton: {
    backgroundColor: "#fc5200",
  },
  nextButton: {
    backgroundColor: "#007bff",
  },
  actionButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "80%",
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default ActivityScreen;
