import { View, TextInput, Button, StyleSheet } from "react-native";

const ProductInput = ({onInputChange, onAddProduct}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Agregar Articulo"
        style={styles.textInput}
        onChangeText={onInputChange}
      />
      <Button title="Agregar" onPress={onAddProduct} />
    </View>
  );
};

export default ProductInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#dadada",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#dadada",
    width: "75%",
    marginRight: 10,
    padding: 10,
  },
});
