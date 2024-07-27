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
                todoId: id,
                steps: []
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
    const handelSelectTodo = (id) => {
        setTodosState(prevState => {
            return {
                ...prevState,
                todoId: id
            }
        })
    }
    const handelAddStep = (step) => {

        setTodosState(prevState => {
            let newTodos = [...prevState.todos]
            const todo = newTodos.find(todo => todo.todoId === prevState.todoId)
            const updatedTodo = { ...todo, steps: [...todo.steps, step] }
            newTodos = newTodos.filter(todo => todo.todoId !== prevState.todoId)

            return {
                ...prevState,
                todos: [...newTodos, updatedTodo]
            }
        })
    }

    const handelDeleteStep = (stepId) => {

        setTodosState(prevState => {
            let newTodos = [...prevState.todos]
            const todo = newTodos.find(todo => todo.todoId === prevState.todoId)
            const newSteps = todo.steps.filter(step => step.stepId !== stepId)
            const updatedTodo = { ...todo, steps: newSteps }
            newTodos = newTodos.filter(todo => todo.todoId !== prevState.todoId)

            return {
                ...prevState,
                todos: [...newTodos, updatedTodo]
            }
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