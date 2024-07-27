import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"
import TodoContext from "./store/todo-context"


const App = () => {

  return (
    <div className="h-screen w-screen flex gap-5 pr-2">
      <TodoContext>
        <Sidebar />
        <MainContent />
      </TodoContext>
    </div>
  )
}

export default App