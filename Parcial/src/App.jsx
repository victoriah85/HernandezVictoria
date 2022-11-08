import { useState } from 'react'
import './App.css'
import Card from './Componentes/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <form action="">
        <input type="text" />
        
      </form>

      <Card/>
      
    </div>
  )
}

export default App
