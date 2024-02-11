import { useState } from 'react'
import { Link } from 'react-router-dom'
import Accordion from './components/accordion'
import RandomColor from './components/color'

import './App.css'
import StarRating from './components/rating'

function App() {
  return (
    <div>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      <StarRating />
    </div>
  )
}

export default App
