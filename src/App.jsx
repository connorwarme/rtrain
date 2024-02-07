import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './components/Nav'
import Header from './components/Header'
import HeaderSmall from './components/HeaderSmall'
import stew from './assets/img/stew.jpg'
import './App.css'

function App() {
  return (
    <div>
      <Nav />

      <main className="px-16 py-6">
        <div>
          <Link to={'/login'}>Log in</Link>
          <Link to={'signup'}>Sign up</Link>
        </div>

        <header>
          <Header />
        </header>

        <div>
          <HeaderSmall text="Latest Recipes" />

          <div className="mt-8">
            {/* <!-- cards go here --> */}
            <div>
              <img src={stew} alt="Stew" />
              <div>
                <span>5 Bean Chili Stew</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>

          <HeaderSmall text="Most Popular" />

          <div className="mt-8">{/* <!-- cards go here --> */}</div>
        </div>

        <div className="mt-12">
          <div>Load More</div>
        </div>
      </main>
    </div>
  )
}

export default App
