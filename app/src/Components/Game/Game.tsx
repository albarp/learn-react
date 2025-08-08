import { Board } from "./Board";
import  useGameLogic  from './useGameLogic';

export default function Game() {

    const {
        history,
        currentMove,
        currentSquares,
        jumpTo,
        handeSquareClick,
        getStatus,
        handleSortToggle
    } = useGameLogic();

    const moves = history.map((_, move) => {

        const description = currentMove === 0 ? 'Go to game start' : `Go to move #${move}` 

        if (move === currentMove) {
            return  <label key={move}>{'You are at move #…' + move}</label>
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
            <div className="status">
                <label>{getStatus()}</label>
            </div>
            <div className="board">
                <Board squares={currentSquares} onSquareClick={handeSquareClick} />
            </div>
            <div className="game-info">
                <ol>
                    {moves}
                </ol>
            </div>
            <button onClick={handleSortToggle}>Sort</button>
        </div>
    )
}