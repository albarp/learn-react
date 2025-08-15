import { useState } from "react"

interface Sculptor {
    Name: string
}

export default function ArtistDelete(){

    const [sculptors, setSculptors] = useState<Sculptor[]>([
        {Name: 'pippo'},
        {Name: 'pluto'},
        {Name: 'paperino'}
    ])

    function onDelete(name: string) {
        const updatedArray = sculptors.filter( s => s.Name != name)
        setSculptors(updatedArray)
    }

    return(
        <>
            <h1>Inspiring Sculptors</h1>
            <ul>
                {sculptors.map( (s, i) =>
                        <li key={i}> {s.Name} <button onClick={ (_) => onDelete(s.Name) }>Delete</button></li>
                )}
            </ul>
        </>
    )

}