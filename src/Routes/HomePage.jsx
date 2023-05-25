import React from 'react'
import MainBottom from '../Component/MainBottom'
import Item1 from '../Component/Item1'
import './HomePage.css';
import Header from '../Component/Header';
function HomePage() {
  return (
    <div className="background-image">
      <div className='grid'>
       <div className='page-header'>
         <Header/>
       </div>
       <div className='page-leftbar'>
        <div className='font'><MainBottom/>
        <button type="button" class="btn btn-primary" style={{color : 'red', backgroundColor : "red"}}>Primary</button></div>
         
       </div>
       <div className='page-main'>
        <Item1/>
       </div>
      </div>
    </div>
  )
}

export default HomePage