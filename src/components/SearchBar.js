import React from "react";
import {StyleSheet, TextInput, View} from "react-native";

export const SearchBar = ({value, onChange}) => (
    <View style={stylesSearchBar.width100}>
        <TextInput style={[stylesSearchBar.createContainer, stylesSearchBar.width100]}
                   placeholder="Rechercher" value={value} onChangeText={onChange}></TextInput>
    </View>
);

export const stylesSearchBar = StyleSheet.create({
    width100:{
        width:"100%"
    },
    createContainer:{
        justifyContent:"space-between",
        flexDirection: "row",
        alignItems:"baseline"
    },
})
