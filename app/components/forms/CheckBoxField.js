import React, { useState } from "react";
import { useFormikContext } from "formik";

import { CheckBox, View, Text, Modal, ScrollView, Button } from "react-native";
import colors from "../../config/colors";
import ErrorMessage from "./ErrorMessage";
import TermsOfService from "../TermsOfService";
import AppButton from "../Button";

function CheckBoxField({ name, width, ...otherProps }) {
  const {
    setFieldTouched,
    errors,
    touched,
    setFieldValue,
  } = useFormikContext();
  const [isVisible, setIsVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
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
          value={isSelected}
          onValueChange={(value) => {
            setFieldValue(name, value);
            setIsSelected(value);
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
            onPress={() => setIsVisible(true)}
          >
            {`Terms & Conditions`}
          </Text>
        </Text>
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
      <Modal visible={isVisible} animationType="slide">
        <View space="between" style={{ flex: 1, padding: 30 }}>
          <ScrollView>
            <TermsOfService />
            <AppButton
              style={{ backgroundColor: colors.primary, marginBottom: 15 }}
              title="I Understand"
              onPress={() => {
                setIsSelected(true);
                setIsVisible(false);
              }}
            />
          </ScrollView>
        </View>
      </Modal>
    </>
  );
}

export default CheckBoxField;
