import { Header } from './components/header'
import { TodoList } from './components/TodoList'


function App() {
  

  return (
    <>
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className='"flex flex-col items-center space-y-6 text-center"'>
    <Header />
    <TodoList />
    </div>
    </div>
    </>
  )
}

export default App

