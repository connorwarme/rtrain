import { Link } from 'react-router-dom'

const NavLink = ({ link }) => {
    return (
        <>
            <li>
                <Link to={link.location}>
                    <span>{link.text}</span>
                </Link>
            </li>
        </>
    )
}

export default NavLink
