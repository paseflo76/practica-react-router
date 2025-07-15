import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav className='header'>
      <NavLink to='/' className='link'>
        Home
      </NavLink>
      <NavLink to='/about' className='link'>
        About
      </NavLink>
      <NavLink to='/contact/123' className='link'>
        Contact
      </NavLink>
    </nav>
  )
}

export default Header
