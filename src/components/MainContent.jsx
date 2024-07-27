import { useContext } from "react"
import NewTodo from "./NewTodo"
import NoTodosSelected from "./NoTodoSelected"
import TodoDetails from "./TodoDetails"
import { TodoContextState } from "../store/todo-context"


const MainContent = () => {
    const { todoId } = useContext(TodoContextState)

    let content;
    if (todoId === undefined) {
        content = <NoTodosSelected />
    } else if (todoId === null) {
        content = <NewTodo />
    } else if (todoId !== null) {
        content = <TodoDetails />
    }
    return (
        <main className="rounded-[25px] border-[1px]
        border-slate-700 h-screen w-2/3
        p-5
        ">
            {content}

        </main>
    )
}

export default MainContent