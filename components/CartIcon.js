import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getProduct } from "../services/ProductsService";

export function CartIcon({ navigation }) {
  const [items, setItems] = useState([]);

  const addItemToCart = (id) => {
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id === id);
      if (!item) {
        return [
          ...prevItems,
          {
            id,
            qty: 1,
            product,
            totalPrice: product.price,
          },
        ];
      } else {
        return prevItems.map((item) => {
          if (item.id === id) {
            item.qty++;
            item.totalPrice += product.price;
          }
          return item;
        });
      }
    });
  };

  const removeItemFromCart = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getItemsCount = () => {
    return items.reduce((sum, item) => sum + item.qty, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate("Cart");
        }}
      >
        Cart ({getItemsCount()})
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: "orange",
    height: 39,
    padding: 12,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
  },
});