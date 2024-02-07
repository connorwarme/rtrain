import { Link } from 'react-router-dom'

const NavLink = ({ link }) => {
  return (
    <>
      <li className="font-bold text-gray-700">
        <Link to={link.location}>
          <span>{link.text}</span>
        </Link>
      </li>
    </>
  )
}

export default NavLink
