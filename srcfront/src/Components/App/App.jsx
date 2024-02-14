import { useState } from 'react'
import './App.css'
// import Login from '../Login/Login'
// import Chat from '../Chat/Chat'
import Message from '../Message/Message'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login/> */}
      {/* <Chat /> */}
      <Message />
    </>
  )
}

export default App
