import { View, Text, StyleSheet } from "react-native";

const ProductItem = ({text}) => {
  return (
    <View style={styles.productItem}>
      <Text style={styles.productText}>{text}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productItem: {
    margin: 8,
    backgroundColor: "#49c5f8",
    borderRadius: 8,
  },
  productText: {
    color: "#ffffff",
    fontSize: 18,
    padding: 8,
  },
});
