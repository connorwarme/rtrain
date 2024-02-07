import { Link } from 'react-router-dom'

const NavLink = ({ link }) => {
  // would be cool to figure out how to dynamically update this when use goes to other pages...
  const linkClass = link.current ? 'border-primary' : 'border-white'
  return (
    <>
      <li className="py-1 font-bold text-gray-700">
        <Link
          to={link.location}
          className={
            'flex items-center justify-end border-r-4 px-4' + ' ' + linkClass
          }
        >
          <img className="ml-2 mr-2 w-5" src={link.img} alt="" />
          <span>{link.text}</span>
        </Link>
      </li>
    </>
  )
}

export default NavLink
