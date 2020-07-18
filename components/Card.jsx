import React from "react";
import { View, StyleSheet } from "react-native";

export const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};
const styles = StyleSheet.create({
  card: {
    // For IOS
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.26,
    // shadowRadius: 6,
    elevation: 5,
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
  },
});
