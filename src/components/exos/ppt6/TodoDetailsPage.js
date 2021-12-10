import React, {useCallback} from 'react';
import {
    Text, SafeAreaView, TouchableOpacity, Image, StyleSheet
} from 'react-native';
import { GO_BACK_IMG_URI } from "../../../assets/image";

export const TodoDetailsPage = ({route, navigation}) => {
    const {name, index} = route.params

    const goBack = useCallback(()=>{
        navigation.goBack()
    },[navigation])

    return (
        <SafeAreaView>
            <TouchableOpacity style={styleTodoDetailsPage.goBack} onPress={goBack}>
                <Image
                    source={{uri:GO_BACK_IMG_URI}}
                    style={styleTodoDetailsPage.goBack}
                />
            </TouchableOpacity>
            <Text>Ma todo :</Text>
            <Text>{name}</Text>
        </SafeAreaView>
    )

}

export const styleTodoDetailsPage = StyleSheet.create({
    goBack:{height:60, width:60},
})
