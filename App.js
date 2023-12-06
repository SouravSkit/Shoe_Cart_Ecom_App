import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsList } from "./screens/ProductsList.js";
import { ProductDetails } from "./screens/ProductDetails.js";
import { Cart } from "./screens/Cart.js";
import { CartProvider } from "./CartContext.js";
import { CartIcon } from "./components/CartIcon.js";
import LoginScreen from "./screens/login.js";
// import store from "./redux/store.js";
// import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <Provider store={store}>
       <CartProvider> 
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="login" component={LoginScreen} options={({ navigation }) => ({ title: 'Login', headerRight: () => <CartIcon navigation={navigation} /> })} />
            <Stack.Screen name="Products" component={ProductsList} options={({ navigation }) => ({ title: 'Products', headerRight: () => <CartIcon navigation={navigation} /> })} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} options={({ navigation }) => ({ title: 'Product Details', headerRight: () => <CartIcon navigation={navigation} /> })} />
            <Stack.Screen name="Cart" component={Cart} options={({ navigation }) => ({ title: 'Cart', headerRight: () => <CartIcon navigation={navigation} /> })} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    //  </Provider>
  );
}

const styles = StyleSheet.create({
  Container: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default App;