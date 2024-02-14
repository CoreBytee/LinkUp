import { useState } from 'react'
import './App.css'
// import Login from '../Login/Login'
import Chat from '../Chat/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Chat />
    </>
  )
}

export default App
