import { useEffect, useRef } from "react"

export default function({src, isPlaying}: {src: string, isPlaying: boolean}) {

    const videoRef = useRef<HTMLVideoElement>(null)

    // in questo caso la logica di controllo del componente video
    // deve girare in useEffect, perché a quel punto so che
    // il componente video è già stato messo nel DOM.
    // Non posso mettere la logica nel codice della funzione che crea il componente video, perché
    // appunto la funzione serve per calcolare cosa mettere a video, ma nulla è ancora stato collegato al
    // DOM
    useEffect(() => {

        if(isPlaying) {
            videoRef.current!.play()
        }
        else{
            videoRef.current!.pause()
        }
    }, [isPlaying])

    return <video ref={videoRef} src={src} loop playsInline width={200} height={200}/>
}