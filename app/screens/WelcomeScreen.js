import React from "react";
import { Dimensions, Image, Text, View, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import AppLinearGradient from "../components/AppLinearGradient";
import colors from "../config/colors";

const { height } = Dimensions.get("screen");

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <AppLinearGradient height={height} />
      <Image style={styles.image} source={require("../../assets/logo.png")} />
      <View style={styles.bottomContainer}>
        <ActivityIndicator visible={true} />
        <Text style={styles.tagline}>Let’s get you started</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 0,
    height: height / 2,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  tagline: {
    alignSelf: "center",
    color: colors.white,
    fontSize: 20,
    fontWeight: "600",
    marginTop: 100,
  },
});

export default WelcomeScreen;
