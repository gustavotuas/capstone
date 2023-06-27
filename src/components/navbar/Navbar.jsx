import React, {useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Menu = () => (
  <>
    <p><Link to="/">Home</Link></p>
    <p><a href="/about">About</a></p>
    <p><a href="#menu">Menu</a></p>
    <p><Link to="/booking">Reservations</Link></p>
    <p><a href="#order-online">Order Online</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='litlem__navbar'>
      <div className='litlem__navbar-links'>
      <div className='litlem__navbar-links_logo'>
        <Link to="/">
          <img src={logo} alt="Little Lemon Logo"/>
        </Link>
      </div>
        <div className='litlem__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='litlem__navbar-sign'>
        <p>Sign Up</p>
        <button type="button">Login</button>
      </div>
      <div className='litlem__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color="#495e57" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#495e57" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className='litlem__navbar-menu_container scale-up-center'>
            <div className='litlem__navbar-menu_container-links'>
              <Menu />
              <div className='litlem__navbar-menu_container-links-sign'>
                <p>Sign Up</p>
                <button type="button">Login</button>
              </div>
            </div>
          </div>
        )}          
      </div>
    </nav>
  )
}

export default Navbar