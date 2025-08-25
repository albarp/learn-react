import { useEffect } from "react"
import createConnection from "./Connection"

export default function() {

    // use effect non è async
    useEffect(() => {
       const initConnection = async () => {
        const connection = createConnection()
        await connection.connect()
        return connection
       }

       let connection: any
       initConnection().then(conn => {connection = conn})

       return () => {
        if(connection) {
            connection.disconnect().catch(console.error)
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