import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import { Button } from "./Button";

export const AddTodoForm = ({value, onChange, onSubmit}) => (
    <View style={[stylesAddTodoForm.createContainer, stylesAddTodoForm.width100]}>
        <TextInput style={[stylesAddTodoForm.inputForm, stylesAddTodoForm.flex3]} placeholder="A faire"
                   value={value} onChangeText={onChange}></TextInput>
        <Button onPress={onSubmit} name="Ajouter" noWidth={true}></Button>
    </View>
);

export const stylesAddTodoForm = StyleSheet.create({
    createContainer:{
        justifyContent:"space-between",
        flexDirection: "row",
        alignItems:"baseline"
    },
    inputForm:{
        backgroundColor:"#BCBFBFBF",
        borderRadius:5,
    },
    width100:{
        width:"100%"
    },
    flex3:{
        flex:3
    },
})