import { Link } from 'react-router-dom'
import NavLink from './NavLink'
import home from "../assets/home.svg"
import about from "../assets/about.svg"
import contact from "../assets/contact.svg"

const Nav = () => {
  const links = [
    {
      text: 'Home',
      location: '/',
      img: home,
    },
    {
      text: 'About',
      location: '/about',
      img: about,
    },
    {
      text: 'Contact',
      location: '/contact',
      img: contact,
    },
  ]

  return (
    <>
      <div className="md:col-span-1">
        <nav>
          <div className="border-b border-gray-200 p-4">
            <h1>
              <Link to={'/'} className="font-bold uppercase">
                Food Ninja
              </Link>
            </h1>
          </div>
          <ul>
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
