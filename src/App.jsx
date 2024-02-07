import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './components/Nav'
import Header from './components/Header'
import HeaderSmall from './components/HeaderSmall'
import stew from './assets/img/stew.jpg'
import './App.css'

function App() {
  return (
    <div className="font-body">
      <Nav />

      <main className="bg-gray-100 px-16 py-6">
        <div className="flex justify-center md:justify-end">
          <Link to={'/login'} className="text-primary">
            Log in
          </Link>
          <Link to={'signup'} className="ml-2 text-primary">
            Sign up
          </Link>
        </div>

        <header>
          <Header />
        </header>

        <div>
          <HeaderSmall text="Latest Recipes" />

          <div className="mt-8">
            {/* <!-- cards go here --> */}
            <div className="relative overflow-hidden rounded bg-white shadow-md">
              <img
                src={stew}
                alt="Stew"
                className="h-32 w-full object-cover sm:h-48"
              />
              <div className="m-4">
                <span className="font-bold">5 Bean Chili Stew</span>
                <span className="block text-sm text-gray-500">
                  Recipe by Mario
                </span>
              </div>
              <div className="absolute top-0 ml-2 mt-2 rounded-full bg-secondary-100 p-2 font-bold uppercase text-secondary-200">
                <span>25 mins</span>
              </div>
            </div>
          </div>

          <HeaderSmall text="Most Popular" />

          <div className="mt-8">{/* <!-- cards go here --> */}</div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="bg-secondary-100 text-secondary-200">Load More</div>
        </div>
      </main>
    </div>
  )
}

export default App
