import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import * as Yup from "yup";

import { Form, FormField, SubmitButton } from "../components/forms";
import AppLinearGradient from "../components/AppLinearGradient";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Username"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  return (
    <>
      <View style={[styles.container, { width: "100%" }]}>
        <AppLinearGradient height={320} />
        <Image style={styles.image} source={require("../../assets/logo.png")} />
        <Text style={styles.text}>{`Hello there, 
Welcome Back`}</Text>
      </View>
      <View style={styles.container}>
        <Form
          initialValues={{ name: "", password: "" }}
          onSubmit={(values) => navigation.navigate("Welcome")}
          validationSchema={validationSchema}
        >
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Username"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Sign in" />
        </Form>
        <Text style={styles.footerText}>
          Don't have an account?{" "}
          <Text
            style={styles.signUpText}
            onPress={() => navigation.navigate("Register")}
          >
            SIGN UP
          </Text>
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  image: {
    position: "absolute",
    top: -50,
    left: 50,
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 24,
    position: "absolute",
    top: 250,
    left: 25,
    lineHeight: 32,
  },
  footerText: {
    alignSelf: "center",
    color: colors.medium,
    fontSize: 14,
    marginTop: 15,
  },
  signUpText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
