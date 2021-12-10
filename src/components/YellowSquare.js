import React from "react";
import {StyleSheet, View} from "react-native";

export const YellowSquare = () => {
    return<View style={stylesYellowSquare.yellowSquare}></View>;
}

export const stylesYellowSquare = StyleSheet.create({
    yellowSquare:{
        backgroundColor:"#FFFF00",
        height:50,
        width:50,
        borderColor: '#000000',
        borderWidth: 2,
        borderStyle: 'solid',
    },
})
