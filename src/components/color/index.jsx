import { useState } from 'react'

const RandomColor = () => {
  const [hexColor, setHexColor] = useState(true)
  const [rgbValue, setRgbValue] = useState('')
  const [hexValue, setHexValue] = useState('#000000')

  const handleChangeColor = () => {
    setHexColor(!hexColor)
    // need to random generate new color, clear values of old style
  }
  const generateRandomNumber = (length) => {
    return Math.floor(Math.random() * length)
  }

  const generateHexColor = () => {
    const hexRange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

    let value = '#'
    for (let i=0; i<6; i++) {
      value += hexRange(generateRandomNumber(hexRange.length))
    }

    setHexValue(value)
  }

  const generateRgbColor = () => {
    const r = generateRandomNumber(256)
    const g = generateRandomNumber(256)
    const b = generateRandomNumber(256)

    
  }

  const handleGenerateColor = () => {
    if (hexColor) {
      generateHexColor()
    } else {
      generateRgbColor()
    }
  }
  
  return (
    <div style={{backgroundColor: hexColor ? hexValue : rgbValue}}>
      <button>{ hexColor ? 'Use RGB' : 'Use Hex' }</button>
      <button>Generate Random Color</button>
    </div>
  )
}

export default RandomColor
