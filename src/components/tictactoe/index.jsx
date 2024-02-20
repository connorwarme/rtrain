import { useEffect, useState } from "react"

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(''))
  const [xTurn, setXTurn] = useState(true)
  const [status, setStatus] = useState('meh')

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  const handleClick = (value) => {
    console.log(value)
    const copySquares = [...squares]
    if (copySquares[value]) return;
    // check if square is empty, if yes, mark
    copySquares[value] = xTurn ? 'X' : 'O'
    setXTurn(!xTurn)
    setSquares(copySquares)
  }

  const checkWinner = (squares) => {
    for (let i = 0; i<winningConditions.length; i++) {
      const [x, y, z] = winningConditions[i]

      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x]
      }
    }
    return null
  }

  useEffect(() => {
    const winner = checkWinner(squares)
    if (!winner && squares.every(square => square !== '')) {
      setStatus('Game Over! It was a draw. Try again!')
    } else if (winner) {
      setStatus(`Game Over! Winner is ${winner}.`)
    } else {
      setStatus(xTurn ? `X's Turn` : `O's Turn`)
    }
  }, [squares, xTurn])

  const handleRestart = () => {
    setSquares(Array(9).fill(''))
  }
  const Square = ({index, value, onClick}) => {
    return (
      <button onClick={() => onClick(index)} className="border-2 h-36 w-36" value={value}>{value}</button>
    )
  }
  return ( 
    <div className="flex flex-col justify-center items-center">
      <div className="tictactoe-container grid grid-cols-3 grid-rows-3 mt-20 border-2">
        {
          squares.map((square, index) => <Square key={index} value={square} onClick={() => handleClick(index)} />)
        }
      </div>
      <h1 className="mt-10">{status}</h1>
      <button onClick={handleRestart} className="border-2 p-4 m-4 rounded-md">Restart Game</button>
    </div>
   );
}
 
export default TicTacToe;