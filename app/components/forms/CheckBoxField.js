import React, { useState } from "react";
import { useFormikContext } from "formik";

import { CheckBox, View, Text } from "react-native";
import colors from "../../config/colors";
import ErrorMessage from "./ErrorMessage";

function CheckBoxField({ name, width, ...otherProps }) {
  const {
    setFieldTouched,
    errors,
    touched,
    setFieldValue,
  } = useFormikContext();
  let initialValue = false;
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 10,
          marginTop: 50,
          marginBottom: 20,
        }}
      >
        <CheckBox
          value={initialValue}
          onValueChange={(value) => {
            setFieldValue(name, value);
            initialValue = true;
          }}
          style={{ alignSelf: "center" }}
          onBlur={() => setFieldTouched(name)}
          {...otherProps}
        />
        <Text style={{ margin: 8 }}>
          I have accepted the{"  "}
          <Text
            style={{
              color: colors.primary,
              fontSize: 16,
              fontWeight: "bold",
              textDecorationLine: "underline",
            }}
            onPress={() => console.log("Terms & Conditions Pressed")}
          >
            {`Terms & Conditions`}
          </Text>
        </Text>
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default CheckBoxField;
