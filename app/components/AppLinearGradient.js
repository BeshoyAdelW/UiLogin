import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function AppLinearGradient({ firstColor, secondColor, children }) {
  return (
    <View style={{ elevation: 5, margin: 5 }}>
      <LinearGradient
        colors={[firstColor, secondColor, firstColor]}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.container}
      >
        <TouchableOpacity onPress={() => console.log(`${firstColor} clicked`)}>
          <View>{children}</View>
          <Text style={styles.text}>Apply now</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    width: 250,
  },
  text: {
    fontSize: 12,
    color: "white",
  },
});

export default AppLinearGradient;
