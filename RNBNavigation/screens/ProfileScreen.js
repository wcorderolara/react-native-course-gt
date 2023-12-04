import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.mainStyle}>
      <Text>Pantalla de Perfil de Usuario</Text>
      <Button title="Ir a inicio" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
