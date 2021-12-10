import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export const Button =({onPress, name, noWidth}) =>{
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={stylesButton.button}>
                <Text style={noWidth ? [stylesButton.buttonText] : [stylesButton.buttonText, stylesButton.buttonWidth]}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

Button.defaultProps = {
    name : "Envoyer",
    onPress : null,
}

export const stylesButton = StyleSheet.create({
    buttonWidth:{
        width: 260,
    },
    button: {
        marginBottom: 30,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius:20,
        borderColor:"black",
        borderWidth:2,
        borderStyle:"solid"
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'grey'
    },
})