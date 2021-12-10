import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export const TodoListItem = ({name, callback, goto,  index}) => (
    <View style={stylesTodoListItem.item}>
        <TouchableOpacity style={stylesTodoListItem.item} onPress={goto.bind(this, name, index)}>
            <View>
                <Text style={stylesTodoListItem.buttonText}>{name}</Text>
            </View>

            <TouchableOpacity onPress={callback.bind(this, index)}>
                <View style={stylesTodoListItem.button}>
                    <Text style={stylesTodoListItem.buttonText}>Supprimer</Text>
                </View>
            </TouchableOpacity>
        </TouchableOpacity>
    </View>
);

export const stylesTodoListItem = StyleSheet.create({
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
    item:{
        backgroundColor:"#eeeeee",
        flexDirection:"row",
        justifyContent:"space-between"
    }
})
