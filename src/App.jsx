import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
// import Accordion from './components/accordion'
// import RandomColor from './components/color'
// import StarRating from './components/rating'
// import LoadMore from './components/load'
// import MenuUI from './components/menu'
// import QRGenerator from './components/generator'
// import LightDark from './components/theme'
// import ImageSlider from './components/slider'
// import ScrollIndicator from './components/scroll'
// import DynamicTabs from './components/tabs'
// import Modal from './components/modal'
// import GitHubProfile from './components/githubprofile'
// import Autocomplete from './components/autocomplete'
// import TicTacToe from './components/tictactoe'
// import FeatureFlagGlobalState from './components/flag/context'
// import FeatureFlag from './components/flag'
// import UseFetchTest from './components/useFetch/test'
// import UseOutsideClickTest from './components/useOutsideClick/test'
import UseResponsiveTest from './components/useResponsive/test'
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
      {/* <GitHubProfile /> */}
      {/* <Autocomplete /> */}
      {/* <TicTacToe /> */}

      {/* have to wrap our component in the context component */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlag />
      </FeatureFlagGlobalState> */}

      {/* <UseFetchTest /> */}
      {/* <UseOutsideClickTest /> */}
      <UseResponsiveTest />
    </div>
  )
}

export default App
