import { Link } from 'react-router-dom'

const NavLink = ({ link }) => {
  // would be cool to figure out how to dynamically update this when use goes to other pages...
  const linkClass = link.current ? 'border-primary' : 'border-white'
  return (
    <>
      <li className="font-bold text-gray-700 py-1">
        <Link to={link.location} className={'px-4 flex justify-end items-center border-r-4' + ' ' + linkClass}>
          <img className='w-5 ml-2 mr-2' src={link.img} alt="" />
          <span>{link.text}</span>
        </Link>
      </li>
    </>
  )
}

export default NavLink
