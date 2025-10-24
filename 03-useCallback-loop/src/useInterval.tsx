import { useEffect } from "react"  

export default function useInterval(callback: () => void, delay: number) {

  useEffect(() => {
    console.log(
        'setting interval with delay', delay
    )
    const interval = setInterval(callback, delay)
    return () => {
        console.log(
            'clearing interval with delay', delay
        )
        clearInterval(interval)
    }
  }, [delay, callback])
}