import React from 'react';
import { StyleSheet, View, TextInput, SafeAreaView } from 'react-native';
import { AccountHeader} from "../../AccountHeader";
import { Button} from "../../Button";

const _onPressButton = () =>{
    alert('Inscription enregistrée!')
}

export const Form = () => {
    return (
        <SafeAreaView style={stylesForm.main}>
            <AccountHeader></AccountHeader>
            <View style={[stylesForm.form]}>
                <TextInput style={stylesForm.inputForm} placeholder="Prénom"></TextInput>
                <TextInput style={stylesForm.inputForm} placeholder="Nom"></TextInput>
                <TextInput secureTextEntry={true} style={stylesForm.inputForm} placeholder="Mot de passe"></TextInput>
                <TextInput secureTextEntry={true} style={stylesForm.inputForm} placeholder="Confirmation mot de passe"></TextInput>
                <Button onPress={_onPressButton}></Button>
            </View>
        </SafeAreaView>
    );
}

export const stylesForm = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"#D1DEDEDE"
    },
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
})
