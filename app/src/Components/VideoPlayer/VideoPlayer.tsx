import { useEffect, useRef } from "react"

export default function({src, isPlaying}: {src: string, isPlaying: boolean}) {

    const videoRef = useRef<HTMLVideoElement>(null)

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