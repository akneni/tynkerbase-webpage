import React, {useState} from 'react'
import { IoMenu } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


import './NavbarStyles.css';


function Navbar() {
  const[nav, setnav] = useState(false)
  const handleNav = () => setnav(!nav)

  return (
    <div className={nav ? 'Navbar navbar-bg' : 'Navbar'}>
      <div className={nav ? 'logo dark' : 'logo'}>
          <h2>TynkerBase</h2>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Us</li>
        <li>Who We Are</li>
        <li>Downloads</li>
      </ul>
      <div className="nav-icons">
        <MdEmail className='icon' style={{marginRight: '1rem'}}/>
        <FaGithub className='icon'/>
      </div>

      <div className="menu-icon" onClick={(handleNav)}>
        {!nav ? (<IoMenu className='icon'/>) : (<IoMdClose style={{color: '#FF00FF'}} className='icon'/>)}
      </div>

      <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
        <ul className='mobile-nav'>
        <li>Home</li>
        <li>About Us</li>
        <li>Who We Are</li>
        <li>Download</li>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="email-icons">
          <MdEmail className='icon'/>
          <FaGithub className='icon'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
