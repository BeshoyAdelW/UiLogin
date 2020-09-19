import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/colors";

function AppLinearGradient({ height }) {
  return (
    <LinearGradient
      colors={[colors.bgSecondary, colors.bgPrimary]}
      style={[styles.gradient, { height: height }]}
    />
  );
}

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
  },
});

export default AppLinearGradient;
