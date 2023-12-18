import React from 'react'
import './work.css';
import Portfolio from '../../assets/portfolio1.png'
import Portfolio1 from '../../assets/portfolio2.png'
import Portfolio2 from '../../assets/portfolio3.png'
import Portfolio3 from '../../assets/porfolio4.jpg'


function Work() {
  return (
    <section id='works'>
       <h2 className='worksTittle'>My portfolio</h2>
       <span className='workDes'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in arcu eget leo rhoncus sollicitudin a in metus.</span>
       <div class="workImgs">
           <img src={Portfolio} alt='' className='workImg'/>
           <img src={Portfolio1} alt='' className='workImg'/>
           <img src={Portfolio2} alt='' className='workImg'/>
           <img src={Portfolio3} alt='' className='workImg'/>
       </div>
       <button className='worksbtn'>See More</button>
    </section>
  )
}

export default Work