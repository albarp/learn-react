import { useState } from "react"

export default function InspiringSculptors() {

    const [newSculptor, setNewSculptor] = useState("")
    const [sculptors, setSculptors] = useState(
        ["Marta Colvin Andrade", "Lamidi Olonade Fakeye", "Louise Nevelson"]
    )

    function handleAddSculptor() {
        setSculptors([
            ...sculptors.slice(0, 1),
            newSculptor,
            ...sculptors.slice(1, sculptors.length)
        ])
    }

    return(
        <>
            <h3>Insprigin Scultors</h3>
            <input type="text" value={newSculptor} onChange={(e) => setNewSculptor(e.target.value)}></input>
            <button onClick={handleAddSculptor}>Insert</button>
            <ul>
                {
                    sculptors.map(s => (
                        <li>{s}</li>
                    ))
                }
            </ul>
        </>
    )
}