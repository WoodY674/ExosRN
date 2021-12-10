import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const _onPressButton = (name) =>{
    alert('Bonjour ' + name + ' !')
}

export const NameItem = ({name} ) => (
    <View style={stylesNamesItem.item}>
        <TouchableOpacity onLongPress={_onPressButton.bind(this, name)}>
            <View style={stylesNamesItem.button}>
                <Text style={stylesNamesItem.buttonText}>{name}</Text>
            </View>
        </TouchableOpacity>
    </View>
);

export const stylesNamesItem = StyleSheet.create({
    button: {
        marginBottom: 30,
        width: 260,
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