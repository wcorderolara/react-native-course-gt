import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla de Inicio de Aplicacion</Text>
      <Button
        title="Ir a Perfil de Usuario"
        onPress={() => navigation.navigate("Profile")}
      />
      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
