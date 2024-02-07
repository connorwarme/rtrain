import { Link } from 'react-router-dom'
import NavLink from './NavLink'

const Nav = () => {
    const links = [
        {
            text: 'Home',
            location: '/',
        },
        {
            text: 'About',
            location: '/about',
        },
        {
            text: 'Contact',
            location: '/contact',
        },
    ]

    return (
        <>
            <div>
                <nav>
                    <div>
                        <h1>
                            <Link to={'/'}>Food Ninja</Link>
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
