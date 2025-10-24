import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  console.log('rerendering')

  setInterval(() => {
    setCount(count + 1)
  }, 1000)

  useEffect(() => {
    console.log('component mounted')
    return () => console.log('component unmounted')
  }, [])


  return (
    <h1> {count} </h1>
  )
}

export default App
