
export default function Child({interval, counter}) {
    // this will clear the interval after the counter gets to 5
    return (
        <div>
            <h1>Child</h1>
            <button onClick={() => clearInterval(interval)}>Stop Interval</button>
        </div>
    )
}