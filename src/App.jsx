import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"


const App = () => {

  return (
    <div className="h-screen w-screen flex gap-5 pr-2">
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App