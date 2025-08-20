import { useRef, useState } from "react"

export default function StopWatch() {

    const [elapsedTime, setElapsedTime] = useState(0)
    const startTime = useRef(Date.now())
    const intervalRef = useRef(0)

    function onStopWatchStart() {

        clearInterval(intervalRef.current)
        setElapsedTime(0)

        startTime.current = Date.now()

        intervalRef.current = setInterval( () => {
            const diff = Date.now() - startTime.current
            setElapsedTime(diff)
        }, 10)
    }

    function onStopWatchStop() {
        clearInterval(intervalRef.current)
    }

    return (
        <>
            <label>Time passed: </label>
            <label>{elapsedTime}</label>
            <button onClick={onStopWatchStart}>Start</button>
            <button onClick={onStopWatchStop}>Stop</button>
        </>
    )
}