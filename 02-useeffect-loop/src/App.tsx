import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [delay, setDelay] = useState(1000)
  console.log('rerendering')

  useEffect(() => {
    console.log('setting interval with delay', delay)
    const interval = setInterval(() => {
      setCount(count => count + 1)
    }, delay)
    return () => {
      console.log('clearing interval with delay', delay)
      clearInterval(interval)
    }
  }, [delay])



  return (
    <>
    <h1> {count} </h1>
    <div>
      <label>
        Interval delay: 
        <input
          type="range"
          min="100"
          max="2000"
          step="100"
          value={delay}
          onChange={e => setDelay(Number(e.target.value))}
        />
        {delay} ms
      </label>
    </div>
    </>
  )
}

export default App
