import NewTodo from "./NewTodo"
import NoTodosSelected from "./NoTodoSelected"
import TodoDetails from "./TodoDetails"


const MainContent = () => {

    return (
        <main className="rounded-[25px] border-[1px]
        border-slate-700 h-screen w-2/3
        p-5
        ">
            <NoTodosSelected />

        </main>
    )
}

export default MainContent