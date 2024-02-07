import { Link } from 'react-router-dom'

const NavLink = ({ link }) => {
  return (
    <>
      <li className='text-gray-700 font-bold'>
        <Link to={link.location}>
          <span>{link.text}</span>
        </Link>
      </li>
    </>
  )
}

export default NavLink
