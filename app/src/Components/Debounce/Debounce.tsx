import { useRef, useState, type ChangeEvent } from "react"

export default function Debounce() {

    const [userInput, setUserInput] = useState('')
    const [serverReply, setServerReply] = useState('resp: ')
    const debounce = useRef(0)

    async function userInputHandler(e: ChangeEvent<HTMLInputElement>){
        setUserInput(e.target.value)
        clearTimeout(debounce.current)
        // we need to use e.target.value instead of userInput, otherwise we have stale data
        debounce.current = setTimeout( () => {setServerReply('resp: ' + e.target.value)}, 1500 )
    }

    return (
        <>
            <label>{serverReply}</label>
            <input type="text" onChange={ e => userInputHandler(e)} value={userInput}></input>
        </>
    )
}