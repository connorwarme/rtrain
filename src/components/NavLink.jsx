import { Link } from 'react-router-dom'

const NavLink = ({ link }) => {
  return (
    <>
      <li className="font-bold text-gray-700">
        <Link to={link.location} className='flex items-center'>
          <img className='w-5 ml-2 mr-2' src={link.img} alt="" />
          <span>{link.text}</span>
        </Link>
      </li>
    </>
  )
}

export default NavLink
