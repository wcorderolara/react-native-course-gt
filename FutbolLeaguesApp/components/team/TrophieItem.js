import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TrophieItem = ({ children }) => {
  return (
    <View style={styles.trophieContainer}>
      <Text style={styles.trophieText}>{children}</Text>
    </View>
  );
};

export default TrophieItem;

const styles = StyleSheet.create({
  trophieContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    margin: 8,
    height: 45,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  trophieText: {
    flexDirection: 'row',
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#0c4a6e",
  },
});
