import React from 'react'
// import { Parallax } from 'react-parallax'
import img4 from "../assets/img4.webp"
import SecondPage from './SecondPage'
function Overlaying() {
    return (
        <>
        <div className="main">
        <div className="overlay"></div>
        <img src={img4} className="image"/>
        {/* <Parallax className="image" blur={{ min: -15, max: 15 }}  bgImage={img4} strength={800}/>  */}
             <div className="overlay-content">
       <div className="content mediumfont text-white">
            <SecondPage/>
     </div>
              
               
         </div>
            </div>
           
        </>
)
}


export default Overlaying
