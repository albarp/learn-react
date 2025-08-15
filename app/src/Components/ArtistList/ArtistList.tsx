import { useState } from "react"

interface Sculptor {
    Name: string | null
}

export default function ArtistList(){

    const [newSculptor, setNewSculptor] = useState("")
    const [sculptors, setSculptors] = useState<Sculptor[]>([{Name: 'pippo'}])

    function onSculptorAdd(){
        setSculptors([
            ...sculptors,
            {Name: newSculptor}
        ])
    }

    return (
        <>
            <h1>Inspiring Scultors</h1>
            <input type="text" onChange={e => setNewSculptor(e.target.value)} value={newSculptor} />
            <button onClick={onSculptorAdd}>Add</button>
            <ul>
                {sculptors.map(s => <li>{s.Name}</li>)}
            </ul>
        </>
    )
}