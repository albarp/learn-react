import Square from "./Square";

export function Board(
        { xIsNext, squares, onPlay }: 
        { xIsNext: boolean, squares: Array<string>, onPlay: (nextSquares: Array<string>) => void }) 
    {

    function handeClick(i: number) {
        if (calculateWinner(squares) || squares[i])
            return;

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';

        onPlay(nextSquares);
    }

    let status = null;
    const winner = calculateWinner(squares)
    if (winner) {
        status = 'Winner is: ' + winner;
    }
    else {
        status = 'Next turn is: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <label>{status}</label>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => { handeClick(0) }} />
                <Square value={squares[1]} onSquareClick={() => { handeClick(1) }} />
                <Square value={squares[2]} onSquareClick={() => { handeClick(2) }} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => { handeClick(3) }} />
                <Square value={squares[4]} onSquareClick={() => { handeClick(4) }} />
                <Square value={squares[5]} onSquareClick={() => { handeClick(5) }} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => { handeClick(6) }} />
                <Square value={squares[7]} onSquareClick={() => { handeClick(7) }} />
                <Square value={squares[8]} onSquareClick={() => { handeClick(8) }} />
            </div>
        </>
    )
}

function calculateWinner(squares: Array<string>) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}