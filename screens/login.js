import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View,
} from 'react-native';

import { Product } from '../components/Product';

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = useState('');
   const [password, onChangePassword] = useState('');

  function renderList({item: product}){
    return(
        <Product
            {...product}
            onPress={() => {
                navigation.navigate('ProductList')
            }}
        />
    )
}

const [userEmail, onChangeUserEmail] = useState('');
const [userpassword, onChangeUserPassword] = useState('');
 


  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
	  Welcome to
        <Text style={styles.innerText}> Shoe Cart E-Comm App</Text>
      </Text>
    </View>
      <Text style={styles.regularText}>Login As Admin </Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={'email'}
        keyboardType={'email-address'}
      />
      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={onChangePassword}
        placeholder={'password'}
        keyboardType={'default'}
        secureTextEntry={true}
      />
     <Pressable
  onPress={() => {
    navigation.navigate('Product'); 
  }}
  style={styles.button}>
  <Text style={styles.buttonText}>Log in</Text>
</Pressable>


<Text style={styles.regularText}>Login As User </Text>
      <TextInput
        style={styles.inputBox}
        value={userEmail}
        onChangeText={onChangeUserEmail}
        placeholder={'email'}
        keyboardType={'email-address'}
      />
      <TextInput
        style={styles.inputBox}
        value={userpassword}
        onChangeText={onChangeUserPassword}
        placeholder={'password'}
        keyboardType={'default'}
        secureTextEntry={true}
      />
     <Pressable
  onPress={() => {
    navigation.navigate('Product'); 
  }}
  style={styles.button}>
  <Text style={styles.buttonText}>Log in</Text>
</Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00A1C9',
  },
  headerContainer: {
    flex: 1,
    backgroundColor: '#F4CE14',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#EDEFEE',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  innerText: {
    fontWeight: 'bold',
  },
});
