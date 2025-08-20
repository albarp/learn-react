import { useRef } from "react"

export default function FocusInput() {

    const inputRef = useRef<HTMLInputElement>(null!)

    function handleFocus() {
        inputRef.current?.focus()
    }

    return (
        <>
            <input ref={inputRef} type="text"></input>
            <button onClick={handleFocus}>Focus the input</button>
            <br />
            <br />
        </>
    )
}