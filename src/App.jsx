import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import DynamicTabs from './components/tabs'
import Modal from './components/modal'
import GitHubProfile from './components/githubprofile'
// import Accordion from './components/accordion'
// import RandomColor from './components/color'
// import StarRating from './components/rating'
// import LoadMore from './components/load'
// import MenuUI from './components/menu'
// import QRGenerator from './components/generator'
// import LightDark from './components/theme'
// import ImageSlider from './components/slider'
// import ScrollIndicator from './components/scroll'

function App() {
  return (
    <div className="flex justify-center">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} /> */}
      {/* <LoadMore /> */}
      {/* <MenuUI /> */}
      {/* <QRGenerator /> */}
      {/* <LightDark /> */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}
      {/* <DynamicTabs /> */}
      {/* <Modal /> */}
      <GitHubProfile />
    </div>
  )
}

export default App
