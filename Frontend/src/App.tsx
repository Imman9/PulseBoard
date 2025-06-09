
import Inbox from "./components/Inbox"
import NavBar from "./components/NavBar"
import TodoBoard from "./components/TodoBoard"

function App() {
  return ( 
  <div className="bg-gray-100 min-h-screen font-sans ">
   
    <NavBar/>   
    <div className="flex h-[calc(100vh-64px)]"> 
        <Inbox />
        <main className="  ml-2 mr-2 rounded-md  flex-1 p-6 oveflow-y-auto bg-blue-400">
          <header className="mb-4">
            <h1 className="text-2xl text-white font-semibold text-gray-800"> My PulseBoard</h1>
          </header>
          <div className=" flex flex-wrap gap-4">
            <TodoBoard/>
          </div>
        </main>
    </div>
  </div> 
  )
}

export default App
