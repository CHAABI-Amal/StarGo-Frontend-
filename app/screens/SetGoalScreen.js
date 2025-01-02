import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const SetGoalScreen = ({ navigation }) => {
  const [selectedGoal, setSelectedGoal] = useState("calories");
  const [inputValue, setInputValue] = useState("");

  const handleNext = () => {
    if (!inputValue) {
      alert("Please enter a value.");
      return;
    }

    // Redirect to ActivityScreen with the selected goal and value
    navigation.navigate("ActivityScreen", {
      goalType: selectedGoal,
      goalValue: inputValue,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Set Your Goal</Text>

      <View style={styles.goalSelection}>
        <TouchableOpacity
          style={[
            styles.goalButton,
            selectedGoal === "calories"
              ? styles.selectedButton
              : styles.unselectedButton,
          ]}
          onPress={() => setSelectedGoal("calories")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedGoal === "calories" && styles.selectedText,
            ]}
          >
            Calories
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.goalButton,
            selectedGoal === "distance"
              ? styles.selectedButton
              : styles.unselectedButton,
          ]}
          onPress={() => setSelectedGoal("distance")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedGoal === "distance" && styles.selectedText,
            ]}
          >
            Distance
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          {selectedGoal === "calories"
            ? "Enter calories to burn:"
            : "Enter distance to run/walk (km):"}
        </Text>
        <TextInput
          style={styles.input}
          placeholder={
            selectedGoal === "calories" ? "e.g., 500" : "e.g., 5"
          }
          keyboardType="numeric"
          value={inputValue}
          onChangeText={setInputValue}
        />
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 30, // Add padding to the top
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  goalSelection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  goalButton: {
    flex: 1,
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#fc5200",
    borderColor: "#fc5200",
  },
  unselectedButton: {
    backgroundColor: "#d3d3d3", // Grey background for unselected buttons
    borderColor: "#ccc",
  },
  buttonText: {
    fontWeight: "bold",
  },
  selectedText: {
    color: "#fff",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  nextButton: {
    backgroundColor: "#fc5200",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  nextButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SetGoalScreen;
