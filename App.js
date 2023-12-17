import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["hsla(152, 100%, 43%, 1)", "hsla(193, 100%, 50%, 1)"]}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Commencer une partie</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 17,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderWidth: 2, // Border width
    borderColor: "#008080", // Border color
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    textTransform: "uppercase",
    color: "black", // Set text color for the button
    fontSize: 16,
    fontFamily: "Inter-Regular",
  },
});
