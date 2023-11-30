import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import { ProductInput, ProductItem } from "./components";

export default function App() {
  const [product, setProduct] = useState("");
  const [productsList, setProductsList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function productHandlerInput(productText) {
    setProduct(productText);
  }

  function addProductHandler() {
    setProductsList((currentProductsList) => [
      ...currentProductsList,
      { text: product, id: Math.random().toString() },
    ]);
    onCloseModal();
  }

  function onPressItem(id) {
    setProductsList( (currentProductsList) => {
      return currentProductsList.filter( (product) => product.id !== id);
    })
  }

  function onOpenModal() {
    setModalVisible(true);
  }

  function onCloseModal() {
    setModalVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Agregar Producto" color="#ebaa35" onPress={onOpenModal}/>
      <ProductInput
        onInputChange={productHandlerInput}
        onAddProduct={addProductHandler}
        isVisible={modalVisible}
        onCancel={onCloseModal}
      />

      <View style={styles.productsContainer}>
        <FlatList
          data={productsList}
          renderItem={(itemData, idx) => {
            return <ProductItem text={itemData.item.text} onPressItem={onPressItem} id={itemData.item.id}/>;
          }}
          keyExtractor={(item, idx) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 56,
    paddingHorizontal: 16
  },

  productsContainer: {
    flex: 7,
  },
});
