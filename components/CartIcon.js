import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getProduct } from "../services/ProductsService";

export function addItemToCart(id, items, setItems) {
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
}

export function removeItemFromCart(id, items, setItems) {
  setItems((prevItems) => prevItems.filter((item) => item.id !== id));
}

export function getItemsCount(items) {
  return items.reduce((sum, item) => sum + item.qty, 0);
}

export function getTotalPrice(items) {
	return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

export function CartIcon({ navigation }) {
  const [items, setItems] = useState([]);

  const PRODUCTS = [
    {
        id: 1,
        name: "Addidas",
        price: 3389,
		image: require("../assets/product_images/addidas.jpg"),
        description:
          "Elevate your running experience with the Adidas Ultraboost 21, a pinnacle of innovation and comfort in the world of running shoes. Engineered for elite performance and designed with style in mind, this shoe redefines what it means to run with unmatched energy return and a sleek aesthetic.",
    },
    {
        id: 2,
        name: "Nike",
        price: 4959,
		image: require("../assets/product_images/nike.jpg"),
        description:
            "Experience the pinnacle of performance and style with the Nike Air Zoom Pegasus 38. Engineered for runners who demand excellence, this iconic running shoe combines cutting-edge technology with a sleek design, ensuring an unparalleled experience on the track, trail, or city streets.",
    },
    {
    id: 3,
    name: "Puma",
    price: 979,
    image: require("../assets/product_images/puma.webp"),
    description: " a triumph of athletic innovation and street-ready style. This iconic shoe seamlessly blends retro-inspired design with cutting-edge technology, offering a versatile and comfortable option for the modern urban explorer."
    }
  ];

  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate("Cart", { items: PRODUCTS });
        }}
      >
        Cart ({getItemsCount(items)})
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