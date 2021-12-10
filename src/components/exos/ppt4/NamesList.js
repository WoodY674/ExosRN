import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { NameItem } from "../../NameItem";

const NAME_LIST = [{name:"Hugo"}, {name:"Antoine"}, {name:"Alyssia"}, {name:"Gwen"}, {name:"Houssam"}, {name:"Florent"}, {name:"Emerick"}, {name:"Marine"}, {name:"Marion"}]

const renderItem = ({ item }) => (
    <NameItem name={item.name} />
);

export const NamesList = () => {
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
