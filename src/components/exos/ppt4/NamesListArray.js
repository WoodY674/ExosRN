import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { NameItem } from "../../NameItem";

const NAME_LIST = ["Hugo", "Antoine", "Alyssia", "Gwen", "Houssam", "Florent", "Emerick", "Marine", "Marion"]

const renderItem = ({ item }) => (
    <NameItem name={item} />
);

export const NamesListArray = () => {
    return (
        <View style={stylesNamesList.flexCenter}>
            <FlatList
                data={NAME_LIST}
                renderItem={renderItem}
            />
        </View>
    );
}

export const stylesNamesList = StyleSheet.create({
    flexCenter:{
        justifyContent:"center",
        alignItems:"center"
    },
})
