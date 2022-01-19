import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import AddTodo from "/component/addtodo";
import Header from "/component/header";
import Todolist from "/component/todoitems";

function App() {
  const [todo, setTodo] = useState([
    { text: "sleep", key: "1" },
    { text: "study", key: "2" },
    { text: "eat", key: "3" },
    { text: "drink", key: "4" },
    { text: "play", key: "5" }
  ]);
  const presshandler = (key) => {
    setTodo((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  const submithandler = (text) => {
    if (text.length > 3) {
      setTodo((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS!", [
        { text: "Close", onPress: () => console.log("Closed") }
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("dismissed");
      }}
    >
      <View style={styles.app}>
        <Header />
        <ScrollView>
          <View style={styles.content}>
            <AddTodo submithandler={submithandler} />
            <View style={styles.list}>
              <FlatList
                data={todo}
                renderItem={({ item }) => (
                  <Todolist item={item} presshandler={presshandler} />
                )}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingHorizontal: 0
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});

export default App;
