import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF5151",
    width: "100%",
    height: "100%",
  },
  modalMainText: {
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.modalMainText}>Main Screen</Text>
    </SafeAreaView>
  );
};

export default App;
