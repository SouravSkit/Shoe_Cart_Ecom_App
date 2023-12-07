import React, { useEffect, useState } from "react";
import { View, Image, Text, Button, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { removeFromCart, addToCart } from "./redux/actions/cartAction";

function Cart({ cartItems, dispatch }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
    setTotal(totalPrice);
  }, [cartItems]);

  function onRemoveFromCart(productId) {
    dispatch(removeFromCart(productId));
  }
  function renderItem({ item }) {
    return (
      <View style={styles.cartLine}>
        <Image style={styles.image} source={item.product.image} />
        <Text style={styles.lineLeft}>
          {item.product.name} x {item.qty}{" "}
          <Text style={styles.productTotal}>${item.totalPrice}</Text>
        </Text>
        <Button
          onPress={() => onRemoveFromCart(item.product.id)}
          title="Remove From Cart"
        />
      </View>
    );
  }

  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={cartItems}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={() => (
        <View style={styles.cartLineTotal}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.mainTotal}>$ {total}</Text>
        </View>
      )}
    />
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

export default connect(mapStateToProps)(Cart);
