import React from 'react'
import './skill.css';


function Skill() {
  return (

<div className='skill'>
  <h1>My Skills</h1>
<div className='skills'>
<li className='bars'><h3>HTML</h3>
  <div className='bar'><div className='html'></div></div>
  </li>
</div><br/>


<span>
<div className='skills'>
<li className='bars'><h3>CSS</h3>
  <div className='bar'><div className='css'></div></div>
  </li>
</div>
</span><br/>

<div className='skills'>
<li className='bars'><h3>React</h3>
  <div className='bar'><div className='react'></div></div>
  </li>
</div><br/>

<div className='skills'>
  <li className='bars'><h3>Javascript</h3>
  <div className='bar'><div className='script'></div></div>
  </li>
  
  </div>
 

</div>
  

  )
}

export default Skill
