import { useState } from 'react'
import home from '../../assets/home.svg'

const StarRating = ({ starNumber = 10 }) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleClick = (index) => {
    setRating(index)
    console.log(index)
  }

  const handleEnter = (index) => {
    setHover(index)
    console.log(index)
  }

  const handleLeave = () => {
    setHover(rating)
  }

  return (
    <>
      {[...Array(starNumber)].map((star, index) => {
        index += 1
        return (
          <div
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleEnter(index)}
            onMouseLeave={() => handleLeave()}
          >
            <img
              src={home}
              alt=""
              className={
                index <= (hover || rating) ? 'bg-slate-400' : 'bg-red-500'
              }
              style={{ height: '40px' }}
            />
          </div>
        )
      })}
    </>
  )
}

export default StarRating
