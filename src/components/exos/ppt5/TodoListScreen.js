import React, {useCallback, useEffect, useMemo, useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { TodoListItem } from "../../TodoListItem"
import { AddTodoForm } from "../../AddTodoForm"
import { SearchBar} from "../../SearchBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch, useSelector } from "react-redux";

const saveTodoList = async (data) =>{
    const json = JSON.stringify(data)
    await AsyncStorage.setItem("todoList", json)
}
const loadTodoList = async () =>{
    try{
        const json = await AsyncStorage.getItem("todoList")
        return json != null ? JSON.parse(json) : [];
    }catch (e) {
        return []
    }
}

export const TodoListScreen = props => {
    const [todoList, setTodoList] = useState([]) // array of object {name}
    const [todoCreate, setTodoCreate] = useState("")
    const [searchTodo, setSearchTodo] = useState("")
    const {navigation} = props
    const [isLoading, setIsLoading] = useState(true) // to display a loading component

    //region redux
    const todoL = useSelector(state=>state.todoList)
    const dispatch = useDispatch()

    const addTodo = useCallback((el)=>{
        dispatch({type:"ADD_TODO", value:el})
    }, [dispatch])
    
    const delTodo = useCallback((index)=>{
        dispatch({type:"DEL_TODO", value:index})
    }, [dispatch])
    //endregion

    //region asyncStorage
    useEffect(()=>{
        const run = async () => {
            if(isLoading){
                const loadList = await loadTodoList()
                setTodoList(loadList)
                setIsLoading(false)
            }
        }
        run()

    }, [])

    useEffect( ()=>{
        saveTodoList(todoList)
    }, [todoList])
    //endregion

    const dataFiltered = useMemo(()=>{
        if (searchTodo === ""){
            return todoList
        }
        return todoList.filter(el=>el.name.includes(searchTodo))
    }, [todoList, searchTodo])

    const onSubmit = useCallback(() =>{
        const list = [...todoList]
        const newTodo = {name:todoCreate}
        list.push(newTodo)
        addTodo(newTodo)
        setTodoList(list)
        //saveTodoList(todoList)
    }, [todoList, todoCreate])

    const removeTodo = useCallback((index) =>{
        const list = [...todoList]
        list.splice(index, 1);
        delTodo(index)
        setTodoList(list)
    }, [todoList, todoCreate])

    const renderItem = ({ item, index }) => (
        <TodoListItem name={item.name} index={index} callback={removeTodo} goto={goToDetailsTodo}/>
    );

    const goToDetailsTodo = useCallback((name, index)=>{
        navigation.navigate("TodoListDetailsPage", {name:name, index:index})
    },[navigation])

    return (
        <View style={[stylesTodoList.flexBetween, stylesTodoList.height100]}>
            <SearchBar value={searchTodo} onChange={setSearchTodo}></SearchBar>
            <FlatList
                data={dataFiltered}
                renderItem={renderItem}
                callback={removeTodo}
            />
            <AddTodoForm value={todoCreate} onChange={setTodoCreate} onSubmit={onSubmit}></AddTodoForm>
        </View>
    );
}

export const stylesTodoList = StyleSheet.create({
    flexBetween:{
        justifyContent:"space-between",
        alignItems:"center"
    },
    height100:{
        height:"100%"
    },
})
