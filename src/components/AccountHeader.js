import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import { IMAGE_ACCOUNT_URI } from "../assets/image";

export const AccountHeader = () =>(
    <View style={stylesAccountHeader.header}>
        <Text style={stylesAccountHeader.title}>Inscription</Text>
        <Image
            style={stylesAccountHeader.accountImage}
            source={{uri:IMAGE_ACCOUNT_URI}}
        />
    </View>
);

export const stylesAccountHeader = StyleSheet.create({
    title:{
        color:"black",
        fontWeight:"900",
        fontSize:28
    },
    header:{
        flex:2,
        justifyContent: "center",
        alignItems:"center",
        textAlign: "center"
    },
    accountImage:{
        height:70,
        width:70,
    },
})
