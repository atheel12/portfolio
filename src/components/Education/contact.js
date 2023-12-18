import React from 'react'
import './contact.css';
import Facebook from '../../assets/facebook.png';
import Linkedin from '../../assets/linkedin.png'
import Github from '../../assets/github.png';

function Contact() {
  return (
   <section id='contactPage'>
    <div id='clients'>
       <h1 className='cotactTittle'>My Education</h1>
       <span className='education'>Reading Bachelor of Software Engineering
Open University of Sri Lanka (2021-2024)
</span><br/>
<span className='education'>Advanced Level - Bio Stream
Al-Ameen M.M.V, Polonnaruwa
</span><br/>
<span className='education'>
Diploma in IT
BCAS Campus
</span>

<div id='contact'>
<h1 className='cotactTittle'>Contact Me</h1>
<span className='cotactDes'>Please fill out the form below to discuss any work opportunities</span>
<form className='contactform'>
  <input type='text' className='name' placeholder='Your Name'/>
  <input type='email' className='email' placeholder='Your Email'/>
  <textarea name="message" rows={6} className='message' placeholder='Message...'></textarea>
  <button type='submit' value='send' className='submitbtn'>Submit</button>
  <div className='links'>
   <a href='https://web.facebook.com/login.php/?_rdc=1&_rdr' target='blank'><img src={Facebook} alt='' className='link'/></a> 
   <a href='https://www.linkedin.com/in/atheel-mohammed/' target='blank'><img src={Linkedin} alt='' className='link'/></a>
   <a href='https://github.com/atheel12' target='blank'><img src={Github} alt='' className='link'/></a> 
    </div>
</form>
</div>
    </div>
   </section>
  )
}

export default Contact