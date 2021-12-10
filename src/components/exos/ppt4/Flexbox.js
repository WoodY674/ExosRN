import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { YellowSquare } from "../../YellowSquare";

export const Flexbox = () => {
    return (
        <SafeAreaView style={stylesFlexbox.main}>
            <View style={stylesFlexbox.layer1}>
            </View>
            <View style={[stylesFlexbox.layer2, stylesFlexbox.flexAround]}>
                <YellowSquare/>
                <YellowSquare/>
                <YellowSquare/>
            </View>
            <View style={stylesFlexbox.layer3}>
            </View>
        </SafeAreaView>
    );
}

export const stylesFlexbox = StyleSheet.create({
    main:{
        flex:1
    },
    layer1:{
        flex:1,
        backgroundColor:"#FF0000"
    },
    layer2:{
        flex:1,
        backgroundColor:"#00FF00"
    },
    layer3:{
        flex:3,
        backgroundColor:"#0000FF"
    },
    flexAround:{
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row"
    }
})
