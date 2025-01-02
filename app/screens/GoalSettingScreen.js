import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";

const GoalSettingScreen = ({ navigation }) => {
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [calories, setCalories] = useState({ min: "", max: "" });
  const [protein, setProtein] = useState({ min: "", max: "" });
  const [carbs, setCarbs] = useState({ min: "", max: "" });
  const [fat, setFat] = useState({ min: "", max: "" });
  const [isPressed, setIsPressed] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Set Your Goals</Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Weight Goals</Text>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Starting Weight (lbs):</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 190"
            keyboardType="numeric"
            value={currentWeight}
            onChangeText={setCurrentWeight}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Goal Weight (lbs):</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 150"
            keyboardType="numeric"
            value={goalWeight}
            onChangeText={setGoalWeight}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Nutritional Goals</Text>
        {renderNutritionInput("Calories", calories, setCalories)}
        {renderNutritionInput("Protein (g)", protein, setProtein)}
        {renderNutritionInput("Carbs (g)", carbs, setCarbs)}
        {renderNutritionInput("Fat (g)", fat, setFat)}
      </View>

      {/* Update Button with Hover Effect */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#ccc" : isPressed ? "#fc5200" : "#fc5200" },
        ]}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <Text style={styles.buttonText}>Update</Text>
      </Pressable>

      {/* Button on the Map */}
      <TouchableOpacity
        style={styles.mapButton}
        onPress={() => navigation.navigate('SetGoalScreen')} // Navigate to GoalSettingScreen
      >
        <Text style={styles.mapButtonText}>Let’s Start the Goal</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const renderNutritionInput = (label, value, setValue) => (
  <View style={styles.inputRow}>
    <Text style={styles.label}>{label}:</Text>
    <TextInput
      style={styles.smallInput}
      placeholder="Min"
      keyboardType="numeric"
      value={value.min}
      onChangeText={(text) => setValue({ ...value, min: text })}
    />
    <TextInput
      style={styles.smallInput}
      placeholder="Max"
      keyboardType="numeric"
      value={value.max}
      onChangeText={(text) => setValue({ ...value, max: text })}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40, // Add space on top
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: 16,
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  smallInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#f9f9f9",
  },
  button: {
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  mapButton: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fc5200",
    borderRadius: 8,
    alignItems: "center",
  },
  mapButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GoalSettingScreen;
