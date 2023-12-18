import React from 'react'
import './intro.css'
import { Link } from 'react-scroll';
import btn from '../../assets/hireme.png'
import bg from '../../assets/bgimage.png'

function Intro() {
  return (
  <section id='intro'>
    <div className="introContent">
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Atheel</span><br/>Front End Develepor</span>
        <p className='introPara'>
I am a hardworking and ambitions individual with a great passion for the
Software & IT industry.<br/>I have strong technical skills as well as excellent
interpersonal skills, enabling me to interact with a wide range of clients.<br/>
I am eager to be challenged in order to grow and further improve my IT skills.<br/>
My greatest passion is in life is using my technical knowledge to benefit other
people and organizations</p> 
        <Link><button className='btn'><img src={btn} alt='' className='btnImg'/>Hire Me</button></Link>
    </div>
    <img src={bg} alt='' className='bg'/>
  </section>
  )
}

export default Intro