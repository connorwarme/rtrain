import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './components/Nav'
import Header from './components/Header'
import stew from './assets/img/stew.jpg'
import './App.css'

function App() {
    return (
        <>
            <Nav />

            <main>
                <div>
                    <Link to={'/login'}>Log in</Link>
                    <Link to={'signup'}>Sign up</Link>
                </div>

                <header>
                    <Header />
                </header>

                <div>
                    <h4>Latest Recipes</h4>

                    <div>
                        {/* <!-- cards go here --> */}
                        <div>
                            <img src={stew} alt="Stew" />
                            <div>
                                <span>5 Bean Chili Stew</span>
                                <span>Recipe by Mario</span>
                            </div>
                        </div>
                    </div>

                    <h4>Most Popular</h4>

                    <div>{/* <!-- cards go here --> */}</div>
                </div>

                <div>
                    <div>Load More</div>
                </div>
            </main>
        </>
    )
}

export default App
