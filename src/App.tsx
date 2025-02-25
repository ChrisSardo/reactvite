import TaskManager from './component/TaskManager'
import { TaskProvider } from './context/TaskContext'


import './App.css'

function App() {
  return (
    <TaskProvider>
      <div className='App'>
        <h1>GERENCIADOR DE TAREFAS</h1>

      <TaskManager/>

      </div>
    </TaskProvider>
  )
}

export default App
