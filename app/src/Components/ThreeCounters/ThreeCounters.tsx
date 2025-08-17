import { useState } from "react"

export default function ThreeCounters() {

    const [counters, setCounters] = useState([0, 0, 0])

    function onPlusOne(index: number) {
        const newCounters = counters.map( (c, i) => {
            if(i === index) {
                return c + 1
            }
            else
                return c
        })
        setCounters(newCounters)
    }

    return (
        <ul>
            {counters.map( (counter, i) => (
                <li>{counter} <button onClick={ (_) => onPlusOne(i)}>+1</button></li>
            ))}
        </ul>
    )

}