import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_icon from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase/firebase'

const Navbar = () => {
  const navRef = useRef()
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 100){
        navRef.current.classList.add('scrolled');
      } else {
        navRef.current.classList.remove('scrolled');
      }
    });
  }, []);

  return (
    <div className='navbar' ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="logo" />
         <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browser by language</li>

         </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons' />
        <p>Children</p>
        <img src={bell_icon} className='icons' alt="" />
        <div className="nav_profile">
          <img src={profile_icon} alt="profile" className='profile' />
          <img src={caret_icon} alt="caret" className='caret_icon' />
          <div className="dropdown">
            <p onClick={() => { logout() }}>Sign Out in Netflix</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar