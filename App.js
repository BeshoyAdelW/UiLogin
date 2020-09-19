import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "./app/config/colors";
import ActivityIndicator from "./app/components/ActivityIndicator";

const { height } = Dimensions.get("screen");

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.bgSecondary, colors.bgPrimary]}
        style={styles.gradient}
      />
      <Image style={styles.image} source={require("./assets/logo.png")} />
      <ActivityIndicator visible={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    height: height,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});
