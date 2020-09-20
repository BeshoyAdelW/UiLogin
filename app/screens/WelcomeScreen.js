import React, { useEffect, useState } from "react";
import { Dimensions, Image, Text, View, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import AppLinearGradient from "../components/AppLinearGradient";
import AppButton from "../components/Button";
import colors from "../config/colors";

const { height } = Dimensions.get("screen");

function WelcomeScreen({ navigation }) {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <AppLinearGradient height={height} />
      <Image style={styles.image} source={require("../../assets/logo.png")} />
      <View style={styles.bottomContainer}>
        {!isReady ? (
          <>
            <ActivityIndicator visible={true} />
            <Text style={styles.tagline}>Let’s get you started</Text>
          </>
        ) : (
          <AppButton
            title="Get Started"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: "Login" }],
              })
            }
          />
        )}
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
    flexDirection: "column",
    paddingHorizontal: 100,
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
    marginTop: 150,
  },
});

export default WelcomeScreen;
