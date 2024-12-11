import { createContext } from "react";

export const todoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'Todo Message',
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})