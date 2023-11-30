import { View, Text, StyleSheet, Pressable } from "react-native";

const ProductItem = ({ text, onPressItem, id }) => {
  
  return (
    <View style={backgroundColor="#64c769"}>
      <Pressable 
        onPress={onPressItem.bind(this, id)} 
        android_ripple={{ color: "#4d9e52" }}
        style={ ({pressed}) => [
          {
            backgroundColor: pressed ? "#4d9e52" : "#64c769",
          },
          styles.productItem
        ]}>
        <Text style={styles.productText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productItem: {
    margin: 8,
    borderRadius: 8,
  },
  productText: {
    color: "#ffffff",
    fontSize: 18,
    padding: 8,
  },
});
