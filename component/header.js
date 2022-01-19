import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.Header}>
      <Text style={styles.title}>My Todos </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  Header: {
    paddingTop: 38,
    height: 80,
    backgroundColor: "coral"
  },
  title: {
    textAlign: "center",
    fontWeight: "Bold",
    color: "#fff",
    fontSize: 20
  }
});
