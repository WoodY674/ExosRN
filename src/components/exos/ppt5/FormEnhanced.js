import React, {useCallback, useEffect, useMemo, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { AccountHeader } from "../../AccountHeader"
import { FormContent} from "../../FormContent";

export const FormEnhanced = () => {
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
            <FormContent
                firstName={firstName} onChangeFirstName={setFirstName}
                lastName={lastName} onChangeLastName={setLastName}
                password={password} onChangePassword={setPassword}
                confirmPassword={confirmPassword} onChangeConfirmPassword={setConfirmPassword}
                memoPassword={checkPasswords}
                isPasswordValid={isPasswordValid} arePasswordEqual={arePasswordEqual}
                onSubmit={onSubmit}
            ></FormContent>
        </View>
    );
}

export const stylesForm = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"#D1DEDEDE"
    },
})
