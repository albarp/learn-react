export default function createConnection() {

    let connectionId: string

    return {
        async connect(): Promise<boolean> {
            connectionId = '' + Math.floor(Math.random() * 1000000)
            console.log(`Connecting... ${connectionId}`)
            // Simulate async work
            await new Promise( resolve => setTimeout(resolve, 2000))

            return true
        },
        async disconnect(): Promise<boolean> {
            console.log(`Disconnect...${connectionId}`)

            await new Promise( resolve => setTimeout(resolve, 2000))

            return true
        }
    }
}