import { createContext, useReducer, useState } from "react";


export const TodoContextState = createContext(
    {
        todoId: undefined,
        todos: [],
        addTodo: () => { }
    }
)


function todoReducerFunction(state, action) {
    if (action.type === "START_ADD_TODO") {

        return {
            ...state,
            todoId: null
        };
    } else if (action.type === "ADD_TODO") {
        const id = Math.random();
        const newTodo = {
            ...action.payload,
            todoId: id,
            steps: []
        };
        return {
            ...state,
            todoId: undefined,
            todos: [...state.todos, newTodo]
        };
    } else if (action.type === "CANCEL_TODO") {
        return {
            ...state,
            todoId: undefined
        };
    } else if (action.type === "SELECTED_TODO") {
        return {
            ...state,
            todoId: action.payload
        }
    } else if (action.type === "ADD_STEP") {
        let newTodos = [...state.todos]
        const todo = newTodos.find(todo => todo.todoId === state.todoId)
        const updatedTodo = { ...todo, steps: [...todo.steps, action.payload] }
        newTodos = newTodos.filter(todo => todo.todoId !== state.todoId)

        return {
            ...state,
            todos: [...newTodos, updatedTodo]
        }
    } else if (action.type === "DELETE_STEP") {
        let newTodos = [...state.todos]
        const todo = newTodos.find(todo => todo.todoId === state.todoId)
        const newSteps = todo.steps.filter(step => step.stepId !== action.payload)
        const updatedTodo = { ...todo, steps: newSteps }
        newTodos = newTodos.filter(todo => todo.todoId !== state.todoId)

        return {
            ...state,
            todos: [...newTodos, updatedTodo]
        }
    }
}

const TodoContext = ({ children }) => {

    const [todosState, todoDispatchAction] = useReducer(todoReducerFunction, {
        todoId: undefined,
        todos: [],
    })

    // const [todosState, setTodosState] = useState({
    //     todoId: undefined,
    //     todos: [],
    // })


    function handelStartAddTodo() {
        todoDispatchAction({
            type: "START_ADD_TODO"
        })
    }
    const handelAddTodo = (todo) => {
        todoDispatchAction({
            type: "ADD_TODO",
            payload: todo
        })

    };

    const handelcancelTodo = () => {
        todoDispatchAction({
            type: "CANCEL_TODO"
        })

    }
    const handelSelectTodo = (id) => {
        todoDispatchAction({
            type: "SELECTED_TODO",
            payload: id
        })

    }
    const handelAddStep = (step) => {

        todoDispatchAction({
            type: "ADD_STEP",
            payload: step
        })


    }

    const handelDeleteStep = (stepId) => {
        todoDispatchAction({
            type: "DELETE_STEP",
            payload: stepId
        })

    }


    const todoCtxState = {
        todoId: todosState.todoId,
        todos: todosState.todos,
        startAddTodo: handelStartAddTodo,
        addTodo: handelAddTodo,
        cancelTodo: handelcancelTodo,
        selectTodo: handelSelectTodo,
        addStep: handelAddStep,
        deleteStep: handelDeleteStep
    }


    return (
        <TodoContextState.Provider value={todoCtxState}>
            {children}
        </TodoContextState.Provider>
    )
}

export default TodoContext