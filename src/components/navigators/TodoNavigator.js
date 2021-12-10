import React from 'react';
import {TodoListScreen} from "../exos/ppt5/TodoListScreen";
import {TodoDetailsPage} from "../exos/ppt6/TodoDetailsPage";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export const TodoNavigator = ()=>{
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Todo" component={TodoListScreen} />
            <Stack.Screen name="TodoListDetailsPage" component={TodoDetailsPage} />
        </Stack.Navigator>
    )
}