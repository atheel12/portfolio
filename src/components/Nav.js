import React from 'react';
import './Nav.css';
import logo from '../assets/logo.png'
import { Link } from 'react-scroll';
import contact from '../assets/contact.png'
const Nav = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='' className='logo'/>

        <div className='menu'>
             <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='menulist'>Home</Link>
             <Link  activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className='menulist'>Skills</Link>
             <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='menulist'>Portfolio</Link>
             <Link  activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={500} className='menulist'>Education</Link>
        </div >
        <div className='listbtn'>
        <button className='menubtn' onClick={() =>{
            document.getElementById('contact').scrollIntoView({behavior:'smooth'});
           }}
          >
            <img src={contact} alt='' className='contactimage'/> Contact Me</button>
        </div>
        
    </nav>
  )
}

export default Nav