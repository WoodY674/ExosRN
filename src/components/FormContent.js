import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import { Button} from "./Button";

export const FormContent = ({firstName, onChangeFirstName, lastName, onChangeLastName, password, onChangePassword,
                         confirmPassword, onChangeConfirmPassword, memoPassword, isPasswordValid,
                         arePasswordEqual, onSubmit}) =>(
    <View style={[stylesFormContent.form]}>
        <TextInput style={stylesFormContent.inputForm} placeholder="Prénom" value={firstName} onChangeText={onChangeFirstName}></TextInput>
        <TextInput style={stylesFormContent.inputForm} placeholder="Nom" value={lastName} onChangeText={onChangeLastName}></TextInput>
        <TextInput secureTextEntry={true}
                   style={isPasswordValid ? [stylesFormContent.inputForm] : [stylesFormContent.inputForm, stylesFormContent.badInput ]}
                   placeholder="Mot de passe" value={password} onChangeText={onChangePassword}></TextInput>
        <TextInput secureTextEntry={true}
                   style={arePasswordEqual ? [stylesFormContent.inputForm] : [stylesFormContent.inputForm, stylesFormContent.badInput ]}
                   placeholder="Confirmation mot de passe" value={confirmPassword}
                   onChangeText={onChangeConfirmPassword} onEndEditing={memoPassword}></TextInput>

        <Button onPress={onSubmit}></Button>
    </View>
)

export const stylesFormContent = StyleSheet.create({
    form:{
        flex:5,
        padding:20,
        justifyContent:"space-evenly",
        flexDirection:"column",
        alignItems:"center"
    },
    inputForm:{
        width:"100%",
        backgroundColor:"#BCBFBFBF",
        borderRadius:5,
    },
    badInput:{
        borderColor: "red",
        borderWidth: 1,
        borderStyle: "solid"
    },
})
