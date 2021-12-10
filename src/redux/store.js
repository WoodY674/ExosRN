import { createStore} from "redux";
import handleTodo from "./handleTodo"

export const store = createStore(handleTodo)

