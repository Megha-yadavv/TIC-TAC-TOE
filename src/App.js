import logo from "./logo.svg";
import "./App.css";
import Square from "./components/Square";
import Reset from "./components/Reset";
import { useState } from "react";

function App() {
  
  const initialValues = Array(9).fill(null);
  const [squareValues, setSquareValues] = useState(initialValues);
  const [currentValue, setCurrentValue] = useState("X");
  const [win, setWin] = useState("");

  const squareClicked = (index) => {
    if (!squareValues[index]) {
      const newSquare = [...squareValues];
      newSquare[index] = currentValue;
      setSquareValues(newSquare);
      setCurrentValue(currentValue === "X" ? "O" : "X");
      checkWinner(newSquare);
    }
  };

  const checkWinner = (squares) => {
    const winnerSquare = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [6, 4, 2],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let i = 0; i < winnerSquare.length; i++) {
      const [a, b, c] = winnerSquare[i];
      if (
        squares[a] &&
        squares[a] == squares[b] &&
        squares[b] == squares[c]
      ) {
        setWin(`Congrats ${squares[a]} is the winner!!`);
        return;
      }
      
    }
    if (squares.every(square => square)) {
      setWin("It's a draw!");
    }
    
  };
  const resetNow = () => {
    setSquareValues(initialValues);
    setWin("");
  };

  return (
    <div className="App">
  
      <Square
        squareValues={squareValues}
        squareClicked={squareClicked}
        win={win}
      />
      <Reset resetNow={resetNow} />
    </div>
  );
}

export default App;
