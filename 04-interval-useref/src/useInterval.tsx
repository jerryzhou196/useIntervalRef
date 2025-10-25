import { useEffect, useRef } from "react"  

export default function useInterval(callback: () => void, delay: number) {
  const interval = useRef(0) 
  console.log('rerendering useInterval')

  useEffect(() => {
    console.log(
        'setting interval with delay', delay
    )
    interval.current = setInterval(callback, delay)
    return () => {
        console.log(
            'clearing interval with delay', delay
        )
        clearInterval(interval.current)
    }
  }, [delay, callback])

  return interval.current
}