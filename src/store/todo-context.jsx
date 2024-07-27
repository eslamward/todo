import { createContext, useState } from "react";


export const TodoContextState = createContext(
    {
        todoId: undefined,
        todos: [],
        addTodo: () => { }
    }
)



const TodoContext = ({ children }) => {

    const [todosState, setTodosState] = useState({
        todoId: undefined,
        todos: [],
    })


    function handelStartAddTodo() {
        setTodosState(prevState => {
            return {
                ...prevState,
                todoId: null
            };
        });


    }
    const handelAddTodo = (todo) => {

        setTodosState(prevState => {
            const id = Math.random();
            const newTodo = {
                ...todo,
                todoId: id
            };
            return {
                ...prevState,
                todoId: undefined,
                todos: [...prevState.todos, newTodo]
            };
        });
    };
    const handelcancelTodo = () => {
        setTodosState(prevState => {
            return {
                ...prevState,
                todoId: undefined
            };
        });
    }
    const todoCtxState = {
        todoId: todosState.todoId,
        todos: todosState.todos,
        startAddTodo: handelStartAddTodo,
        addTodo: handelAddTodo,
        cancelTodo: handelcancelTodo,
    }


    return (
        <TodoContextState.Provider value={todoCtxState}>
            {children}
        </TodoContextState.Provider>
    )
}

export default TodoContext