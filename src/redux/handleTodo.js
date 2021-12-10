const initialState = {
    todoList : []
}


const addOneTodo = (state, action) => {
    return { ...state, todoList:[...state.todoList, action.value] }
}

const removeOneTodo = (state, action) => {
    let nextState
    const todoIndex = state.todoList.findIndex(item => item.id === action.index)
    if (todoIndex !== -1) {
        // Le film est déjà dans les favoris, on le supprime de la liste
        nextState = {
            ...state,
            todoList: state.todoList.filter( (item, index) => index !== todoIndex)
        }
    }
    return !nextState ? state : nextState
}

const handleTodo = (state=initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return addOneTodo(state, action)
        case "DEL_TODO":
            return removeOneTodo(state, action)
        default:
            return state
    }
}

export default handleTodo