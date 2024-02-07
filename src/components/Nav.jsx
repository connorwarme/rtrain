import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'
import home from '../assets/home.svg'
import about from '../assets/about.svg'
import contact from '../assets/contact.svg'

const Nav = () => {
  const links = [
    {
      text: 'Home',
      location: '/',
      img: home,
      current: true,
    },
    {
      text: 'About',
      location: '/about',
      img: about,
      current: false,
    },
    {
      text: 'Contact',
      location: '/contact',
      img: contact,
      current: false,
    },
  ]

  const handleMenuClick = () => {
    const list = document.querySelector('#menu-list')
    list.classList.toggle('hidden')
  }

  return (
    <>
      <div className="md:col-span-1 md:flex md:justify-end">
        <nav className="text-right">
          <div className="flex items-center justify-between">
            <h1 className="border-b border-gray-200 p-4 font-bold uppercase">
              <Link to={'/'} className="hover:text-gray-800">
                Food Ninja
              </Link>
            </h1>
            <div
              className="cursor-pointer px-4 md:hidden"
              id="menu"
              onClick={handleMenuClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
          <ul className="mt-6 hidden text-sm md:block" id="menu-list">
            {links.map((link, index) => (
              <NavLink key={index} link={link} />
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Nav
