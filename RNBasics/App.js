import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ProductInput, ProductItem } from "./components";

export default function App() {
  const [product, setProduct] = useState("");
  const [productsList, setProductsList] = useState([]);

  function productHandlerInput(productText) {
    setProduct(productText);
  }

  function addProductHandler() {
    setProductsList((currentProductsList) => [
      ...currentProductsList,
      { text: product, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <ProductInput
        onInputChange={productHandlerInput}
        onAddProduct={addProductHandler}
      />

      <View style={styles.productsContainer}>
        <FlatList
          data={productsList}
          renderItem={(itemData, idx) => {
            return <ProductItem text={itemData.item.text} />;
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
    paddingHorizontal: 16,
  },

  productsContainer: {
    flex: 7,
  },
});
