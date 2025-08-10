import { useState } from 'react'
import sculptureData from './data.json'

export default function SculptureGallery() {

    const [count, setCount] = useState(0)
    const [showDetails, setShowDetails] = useState(false)

    function handleNext() {
        if(count === sculptureData.length - 1) {
            setCount(0)
        }
        else{
            setCount(count + 1)
        }
    }

    function handleShowDetails(){
        setShowDetails(!showDetails)
    }

    const sculpture = sculptureData[count]
    return (
        <>
            <button onClick={handleNext}>Next</button>
            <h2>
                <i>{sculpture.name}</i>
                <div>by {sculpture.artist}</div>
            </h2>
            <h3>({count + 1} of {sculptureData.length})</h3>
            <button onClick={handleShowDetails}>
                {showDetails ? 'Hide Details' : 'Show details'}
            </button>
            {showDetails && <p>{sculptureData[count].description}</p>}
            <img src={sculpture.url} alt={sculpture.alt} />
        </>
    )

}