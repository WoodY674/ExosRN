import React from 'react';
import {TodoListScreen} from "../exos/ppt5/TodoListScreen";
import {FormEnhanced} from "../exos/ppt5/FormEnhanced";
import {NamesList} from "../exos/ppt4/NamesList";
import {Flexbox} from "../exos/ppt4/Flexbox";
import {TodoDetailsPage} from "../exos/ppt6/TodoDetailsPage";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AppNavigator = ()=>{
    return (
        <Stack.Navigator
            screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name="Todo" component={TodoListScreen} />
            <Stack.Screen name="Form" component={FormEnhanced} />
            <Stack.Screen name="nameList" component={NamesList} />
            <Stack.Screen name="Settings" component={Flexbox} />
            <Stack.Screen name="TodoListDetailsPage" component={TodoDetailsPage} />
        </Stack.Navigator>
    )
}