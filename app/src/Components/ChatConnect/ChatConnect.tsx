import { useEffect, useState } from "react"
import createConnection from "./Connection"

export default function() {

    const [message, setMessage] = useState("")

    // use effect non è async
    useEffect(() => {

        // no need to use useRef since we are in a closure
        const connection = createConnection()

        connection
            .connect()
            .catch(console.error)

       return () => {
        if(connection) {
            connection.disconnect()
            .catch(console.error)
        }
       }

    }) // run only when mounted the first time (not at every render)

    return (
        <>
            <h2>Wellcome Chat</h2>
            <input type="text" value={message} onChange={ e => setMessage(e.target.value)} ></input>
            <br />
            <br />
        </>
    )
}