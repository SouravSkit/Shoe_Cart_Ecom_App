import React from "react";
import {Text, Image, View, StyleSheet, TouchableOpacity,Dimensions} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


const imageWidth = screenWidth * 0.8; 
  const imageHeight = screenHeight * 0.4; 



export function Product({name, price, image, onPress}){
    return(
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image style={styles.image} source={image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>$ {price}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '4%'
    },
    image: {
        width: imageWidth,
        height:imageHeight,
        resizeMode: 'cover'

    },
    infoContainer: {
        padding: 16 
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8
    }
})