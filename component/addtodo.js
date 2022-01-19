import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddTodo({ submithandler }) {
  const [text, setText] = useState("");

  const changehandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        multiline
        style={styles.input}
        placeholder="New to do...."
        onChangeText={changehandler}
      />
      <Button onPress={() => submithandler(text)} title="Add to do" />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    boderBottomColor: "#ddd"
  }
});
