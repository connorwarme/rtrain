import { useState } from 'react'
import { Link } from 'react-router-dom'
import Accordion from './components/accordion'
import RandomColor from './components/color'
import StarRating from './components/rating'
import './App.css'
import ImageSlider from './components/slider'

function App() {
  return (
    <div className='flex justify-center'>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      <ImageSlider url={'https://picsum.photos/v2/list'} />
    </div>
  )
}

export default App
