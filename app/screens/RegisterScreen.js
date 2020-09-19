import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import * as Yup from "yup";

import { Form, FormField, SubmitButton } from "../components/forms";
import AppLinearGradient from "../components/AppLinearGradient";
import colors from "../config/colors";
import CheckBoxField from "../components/forms/CheckBoxField";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  termsOfService: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});

function LoginScreen(props) {
  return (
    <>
      <View style={[styles.container, { flex: 1, width: "100%" }]}>
        <AppLinearGradient height={200} />
        <Image
          style={styles.image}
          source={require("../../assets/logo-sm.png")}
        />
        <Text style={styles.text}>Create New Account</Text>
      </View>
      <View style={styles.container}>
        <Form
          initialValues={{
            name: "",
            email: "",
            password: "",
            termsOfService: false,
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
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
          <CheckBoxField name="termsOfService" />
          <SubmitButton title="Register" />
        </Form>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
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
    top: 0,
    right: 0,
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 24,
    position: "absolute",
    top: 150,
    left: 25,
    lineHeight: 30,
  },
  footerText: {
    alignSelf: "center",
    color: colors.medium,
    fontSize: 14,
    marginTop: 15,
  },
});

export default LoginScreen;
