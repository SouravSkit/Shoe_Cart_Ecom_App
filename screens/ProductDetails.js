import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, ScrollView, SafeAreaView, Button, Dimensions } from 'react-native';
import { getProduct } from '../services/ProductsService';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartAction';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const imageWidth = screenWidth * 0.8;
const imageHeight = screenHeight * 0.4;

export function ProductDetails({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});
  const dispatch = useDispatch(); 

  useEffect(() => {
    setProduct(getProduct(productId));
  }, [productId]);

  function onAddToCart() {
    dispatch(addToCart(productId)); 
  }

  function onRemoveFromCart() {
    dispatch(removeFromCart(productId)); 
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={product.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Button onPress={onAddToCart} title="Add To Cart" />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Button onPress={onRemoveFromCart} title="Remove From Cart" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: imageWidth,
    height: imageHeight,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
});
