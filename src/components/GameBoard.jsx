import { useRef } from "react";

export const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, board }) {
  const gameBoardRef = useRef(null);

  function handleFullscreen() {
    if (!document.fullscreenElement) {
      gameBoardRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  // const [gameBoard, setGameBoard]= useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //         updatedBoard[rowIndex] [colIndex] = activePlayerSymbol;
  //         return updatedBoard;
  //     });

  //     onSelectSquare();
  // }

  return (
    <>
      <button onClick={handleFullscreen}>Toggle Fullscreen</button>
      <ol id="game-board" ref={gameBoardRef}>
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                    disabled={playerSymbol !== null}
                  >
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
