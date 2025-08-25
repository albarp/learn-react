export default function createConnection() {
    return {
        async connect(): Promise<boolean> {
            console.log('Connecting...')
            // Simulate async work
            await new Promise( resolve => setTimeout(resolve, 2000))

            return true
        },
        async disconnect(): Promise<boolean> {
            console.log('Disconnect...s')

            await new Promise( resolve => setTimeout(resolve, 2000))

            return true
        }
    }
}