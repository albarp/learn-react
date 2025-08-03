import { useState } from "react";
import { Board } from "./Board";

export default function Game() {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0)
    const xIsNext = currentMove % 2 === 0

    const currentSquares = history[currentMove]

    function handlePlay(nextSquares: Array<string>) {
        const nextHistory = [...history.splice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1)
    }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove)
    }

    const moves = history.map((_, move) => {

        let description = 'Go to game start'

        if (move > 0) {
            description = 'Go to move' + move
        }

        if (move === currentMove) {
            return (
                <label>{'You are at move #…' + move}</label>
            )
        }
        else {
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{description}</button>
                </li>
            )
        }
    });

    return (
        <div className="game">
            <div className="board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    )
}