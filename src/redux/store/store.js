import { createStore } from "redux"
import counterReducer from "../reducers/counterReducer";
import todoReducer from "../reducers/todoReducer";

const store = createStore(todoReducer)

export default store;