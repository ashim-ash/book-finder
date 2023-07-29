import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gradient-to-t from-amber-400 to-amber-100 '>
      <Home/>
    </div>
  )
}

export default App
