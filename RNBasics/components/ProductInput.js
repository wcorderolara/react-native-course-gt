import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

const ProductInput = ({ onInputChange, onAddProduct, isVisible, onCancel }) => {
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/Basket.png')} />
        <TextInput
          placeholder="Agregar Articulo"
          style={styles.textInput}
          onChangeText={onInputChange}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancelar" color="#ebaa35" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Agregar" onPress={onAddProduct} color="#35913a"/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ProductInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#edffef"
  },
  textInput: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#ebaa35",
    borderRadius: 8,
    color: "#35913a",
    width: "100%",
    marginRight: 10,
    marginBottom: 10,
    padding: 10,

  },
  buttonContainer: {
    flexDirection: "row"
  },
  button: {
    width: "40%",
    marginHorizontal: 8
  },
  image:{
    width: 100,
    height: 100,
    margin: 20,
  }
});
