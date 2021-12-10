import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, Image, TextInput
} from 'react-native';
import { AccountHeader } from "../../AccountHeader"

//@todo bonus onEndEditing

export const FormEnhanced2 = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isPasswordValid, setIsPasswordValid] = useState(null)
    const [arePasswordEqual, setArePasswordEqual] = useState(null)

    useEffect(()=>{
        setIsPasswordValid(password.length>=3)
    }, [password])

    const checkPasswords = useMemo( ()=>{
        setArePasswordEqual( password === confirmPassword)
    }, [password, confirmPassword])

    const onSubmit = useCallback(() =>{
        alert("Bonjour " + firstName + " " + lastName + ", votre mot de passe est " + password)
    }, [firstName, lastName, password])

    return (
        <View style={stylesForm.main}>
            <AccountHeader></AccountHeader>

            <View style={[stylesForm.form]}>
                <TextInput style={stylesForm.inputForm} placeholder="Prénom" value={firstName} onChangeText={setFirstName}></TextInput>
                <TextInput style={stylesForm.inputForm} placeholder="Nom" value={lastName} onChangeText={setLastName}></TextInput>
                <TextInput secureTextEntry={true}
                           style={isPasswordValid ? [stylesForm.inputForm] : [stylesForm.inputForm, stylesForm.badInput ]}
                           placeholder="Mot de passe" value={password} onChangeText={setPassword}></TextInput>
                <TextInput secureTextEntry={true}
                           style={arePasswordEqual ? [stylesForm.inputForm] : [stylesForm.inputForm, stylesForm.badInput ]}
                           placeholder="Confirmation mot de passe" value={confirmPassword}
                           onChangeText={value=>{setConfirmPassword(value);checkPasswords}}></TextInput>
                <TouchableOpacity onPress={onSubmit}>
                    <View style={stylesForm.button}>
                        <Text style={stylesForm.buttonText}>Envoyer</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export const stylesForm = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"#D1DEDEDE"
    },
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
    form:{
        flex:5,
        padding:20,
        justifyContent:"space-evenly",
        flexDirection:"column",
        alignItems:"center"
    },
    accountImage:{
        height:70,
        width:70,
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
    flexAround:{
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row"
    }
})
