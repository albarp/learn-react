import Square from "./Square";

export function Board(
        { squares, onSquareClick }: 
        { squares: Array<string>, onSquareClick: (i: number) => void }) 
    {

    const board = Array.from({length: 3}, (_, rowIndex) => (
        <div key={rowIndex} className="board-row">
            {
                Array.from( {length:3}, (_, colIndex) => {
                    const squareIndex = colIndex + 3 * rowIndex
                    return(
                        <Square
                            key={squareIndex}
                            value={squares[squareIndex]}
                            onSquareClick={() => {onSquareClick(squareIndex)}}
                        />
                    )
                })
            }
        </div>
    ))

    return (
        <>
            {board}
        </>
    )
}

