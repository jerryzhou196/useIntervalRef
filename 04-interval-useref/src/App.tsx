import { useState, useCallback, useRef } from 'react'
import './App.css'
import useInterval from './useInterval'
import Child from './child'

function App() {
  const [count, setCount] = useState(0)
  const [delay, setDelay] = useState(1000)


  const callback = useCallback(() => {
    setCount(count => count + 1)
  }, [])

  const interval = useInterval(callback, delay)

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
      <Child interval={interval} counter={count} />
    </div>
    </>
  )
}

export default App
