import { useState } from 'react'
import { Link } from 'react-router-dom'
import Accordion from './components/accordion'
import RandomColor from './components/color'

import './App.css'

function App() {
  return (
    <div>
      {/* <Accordion /> */}
      <RandomColor />
    </div>
  )
}

export default App
