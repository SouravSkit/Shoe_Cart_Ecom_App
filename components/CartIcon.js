import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getProduct, getProducts } from "../services/ProductsService";
import { ProductDetails } from "../screens/ProductDetails";
import { useSelector } from "react-redux";


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

export function getTotalPrice(items) {
	return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  export function getItemsCount(items) {
	const cartItems = items?.cart?.items;
  
	if (!Array.isArray(cartItems)) {
	  return 0;
	}
  
	return cartItems.reduce((sum, item) => sum + (item.qty || 0), 0);
  }

export function CartIcon({ navigation }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([]);
  }, []);

  const itemsCount = useSelector(getItemsCount);


  return (
    <View style={styles.container}>
   <Text style={styles.text} onPress={()=>{navigation.navigate("Cart",{items})}}>Cart ({itemsCount})</Text>
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



