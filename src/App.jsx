import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './components/Nav'
import Header from './components/Header'
import HeaderSmall from './components/HeaderSmall'
import Card from './components/Card'
import stew from './assets/img/stew.jpg'
import noodles from './assets/img/noodles.jpg'
import curry from './assets/img/curry.jpg'
import './App.css'

function App() {
  const recipes = [
    {
      title: '5 Bean Chili Stew',
      img: {
        url: stew,
        alt: 'Stew',
      },
      author: 'Mario',
      duration: '25',
    },
    {
      title: 'Veg Noodles',
      img: {
        url: noodles,
        alt: 'Noodles',
      },
      author: 'Mario',
      duration: '20',
    },
    {
      title: 'Tofu Curry',
      img: {
        url: curry,
        alt: 'Curry',
      },
      author: 'Mario',
      duration: '15',
    },
  ]
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
            {recipes.map((recipe, index) => (
              <Card key={index} recipe={recipe} />
            ))}
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
