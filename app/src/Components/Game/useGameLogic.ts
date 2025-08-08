import { useState } from 'react'

export default function useGameLogic() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)

    const xIsNext = currentMove % 2 === 0
    const currentSquares = history[currentMove]
    const winner = calculateWinner(currentSquares);

    function handlePlay(nextSquares: Array<string>) {
        const nextHistory = [...history.splice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1)
    }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove)
    }

    function handeSquareClick(i: number) {
        if (winner || currentSquares[i])
            return;

        const nextSquares = currentSquares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';

        handlePlay(nextSquares);
    }

    function getStatus() {
        if (winner) {
            return 'Winner is: ' + winner;
        }
        return 'Next turn is: ' + (xIsNext ? 'X' : 'O');
    }

    function handleSortToggle(){
        const historyCopy = history.slice()
        setHistory(historyCopy.reverse())
    }

    return({
        currentSquares,
        xIsNext,
        winner,
        history,
        currentMove,
        handeSquareClick,
        jumpTo,
        getStatus,
        handleSortToggle
    })
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
