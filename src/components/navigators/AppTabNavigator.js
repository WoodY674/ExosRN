import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Image} from "react-native";
import { TodoNavigator } from "./TodoNavigator"
import {FormEnhanced} from "../exos/ppt5/FormEnhanced";
import {NamesList} from "../exos/ppt4/NamesList";
import {NamesListArray} from "../exos/ppt4/NamesListArray";
import {Flexbox} from "../exos/ppt4/Flexbox";
import {Form} from "../exos/ppt4/Form";
import {FORM_IMG_URI, FLEXBOX_IMG_URI, FORM_ENHANCED_IMG_URI, LIST_IMG_URI, TODO_LIST_IMG_URI} from "../../assets/image";

const Tab = createBottomTabNavigator();

export const AppTabNavigator = ()=>{
    return (
        <Tab.Navigator initialRouteName="TodoList"
           screenOptions={({ route }) => ({
               tabBarIcon: ({ focused, color, size }) => {
                   let iconUri;

                   if (route.name === "FormSimple") {
                       iconUri = FORM_IMG_URI
                   } else if (route.name === "TodoList") {
                       iconUri = TODO_LIST_IMG_URI
                   }
                   else if(route.name === "Flexbox"){
                       iconUri = FLEXBOX_IMG_URI
                   }
                   else if(route.name === "FormEnhanced"){
                       iconUri = FORM_ENHANCED_IMG_URI
                   }
                   else{
                       iconUri = LIST_IMG_URI
                   }
                   return <Image style={{width:20, height:20}} source={{uri:iconUri}} size={size} color={color} tintColor={color}/>;
               },
               tabBarActiveTintColor: "tomato",
               tabBarInactiveTintColor: "gray",
           })}
        >
            <Tab.Screen name="Flexbox" component={Flexbox} />
            <Tab.Screen name="FormSimple" component={Form} />
            <Tab.Screen name="NameList" component={NamesList} />

            <Tab.Screen name="FormEnhanced" component={FormEnhanced} />
            <Tab.Screen name="TodoList" component={TodoNavigator} />
        </Tab.Navigator>
    )
}