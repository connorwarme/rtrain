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
      value += hexRange[generateRandomNumber(hexRange.length)]
    }
    setRgbValue('')
    setHexValue(value)
  }

  const generateRgbColor = () => {
    const r = generateRandomNumber(256)
    const g = generateRandomNumber(256)
    const b = generateRandomNumber(256)

    setHexValue('')
    setRgbValue(`rgb(${r}, ${g}, ${b})`)
  }

  const handleGenerateColor = () => {
    if (hexColor) {
      generateHexColor()
    } else {
      generateRgbColor()
    }
  }
  
  return (
    <div style={{backgroundColor: hexColor ? hexValue : rgbValue, height: '100vh'}}>
      <button onClick={handleChangeColor} className='p-4 m-4 border bg-slate-300'>{ hexColor ? 'Use RGB' : 'Use Hex' }</button>
      <button onClick={(handleGenerateColor)} className='p-4 m-4 border bg-slate-300'>Generate Random Color</button>
      <div>
        <h1>{hexColor ? 'Hex' : 'RGB'}</h1>
        <h3>{hexColor ? hexValue : rgbValue}</h3>
      </div>
    </div>
  )
}

export default RandomColor
