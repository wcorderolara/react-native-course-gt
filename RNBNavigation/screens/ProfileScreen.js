import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const ProfileScreen = ({ route, navigation }) => {
  const {profileId, profileName, jobPosition} = route.params;
  
  return (
    <View style={styles.mainStyle}>
      <Text>Pantalla de Perfil de Usuario</Text>
      <View>
        <Text>Id: {profileId}</Text>
        <Text>Nombre: {profileName}</Text>
        <Text>Posicion Laboral: {jobPosition}</Text>
      </View>
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
