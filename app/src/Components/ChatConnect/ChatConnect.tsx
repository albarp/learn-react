import { useEffect, useRef } from "react"
import createConnection from "./Connection"

export default function() {

    const connectionRef = useRef<any>(null)

    // use effect non è async
    useEffect(() => {
        connectionRef.current = createConnection()

        connectionRef.current
            .connect()
            .catch(console.error)

       return () => {
        if(connectionRef.current) {
            connectionRef.current.disconnect()
            .catch(console.error)
        }
       }

    }, []) // run only when mounted the first time (not at every render)

    return (
        <>
            <h2>Wellcome Chat</h2>
            <br />
            <br />
        </>
    )
}