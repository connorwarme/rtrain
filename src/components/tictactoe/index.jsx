import { useEffect, useState } from 'react'

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(''))
  const [xTurn, setXTurn] = useState(true)
  const [status, setStatus] = useState('meh')

  const handleClick = (value) => {
    const copySquares = [...squares]
    // if there's a winner, or already a value, don't handle click
    if (checkWinner(copySquares) || copySquares[value]) return
    // otherwise, mark square based on whose turn
    copySquares[value] = xTurn ? 'X' : 'O'
    // switch turns
    setXTurn(!xTurn)
    // update state of board (ie array)
    setSquares(copySquares)
  }

  const checkWinner = (squares) => {
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
    for (let i = 0; i < winningConditions.length; i++) {
      const [x, y, z] = winningConditions[i]

      if (
        // if there's a value in x, and it matches the value in y, and in z
        // then return the winning value
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x]
      }
    }
    return null
  }

  useEffect(() => {
    const winner = checkWinner(squares)
    // if no winner and every square is full, it is a draw
    // if a winner, declare winner
    // otherwise, update whose turn it is
    if (!winner && squares.every((square) => square !== '')) {
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
  const Square = ({ index, value, onClick }) => {
    return (
      <button
        onClick={() => onClick(index)}
        className="h-36 w-36 border-2"
        value={value}
      >
        {value}
      </button>
    )
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="tictactoe-container mt-20 grid grid-cols-3 grid-rows-3 border-2">
        {squares.map((square, index) => (
          <Square
            key={index}
            value={square}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <h1 className="mt-10">{status}</h1>
      <button onClick={handleRestart} className="m-4 rounded-md border-2 p-4">
        Restart Game
      </button>
    </div>
  )
}

export default TicTacToe
