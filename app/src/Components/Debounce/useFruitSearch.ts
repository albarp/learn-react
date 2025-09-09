import { useCallback, useState } from "react";

export default function useGetFruits() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    // stabilize the getFruits function with te use of useCallback so that
    // the getFruits is created just once since it has no deps
    const getFruits = useCallback(async (filter: string, signal?: AbortSignal) => {
        try{
            setIsLoading(true)
            setError('')
            // try and use the fake api at http://localhost:5173/api/items?q=ap (define in vite.config.ts)
            const resp = await fetch(`http://localhost:5173/api/items?q=${encodeURIComponent(filter)}`, {signal})

            if (!resp.ok) {
                setError(resp.status.toString())
                return ''
            }
            const data: Array<{ id: number; name: string }> = await resp.json()
            return data.map(i => i.name).join(', ')
        }
        catch(e: unknown) {
            if(e instanceof Error && e.name == 'AbortError') return ''
            if (e instanceof Error) setError(e.message)
            else setError('Unknown error')
            return ''
        }
        finally{
            setIsLoading(false)
        }
    }, [])

    return {
        getFruits,
        getFruitsIsLoading: isLoading,
        getFruitsError: error
    }
}