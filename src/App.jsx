import { useState } from 'react'
import { Link } from 'react-router-dom'
// import Accordion from './components/accordion'
// import RandomColor from './components/color'
// import StarRating from './components/rating'
import './App.css'
import LoadMore from './components/load'
import MenuUI from './components/menu'
import QRGenerator from './components/generator'
// import ImageSlider from './components/slider'

function App() {
  return (
    <div className='flex justify-center'>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} /> */}
      {/* <LoadMore /> */}
      {/* <MenuUI /> */}
      <QRGenerator />
    </div>
  )
}

export default App
