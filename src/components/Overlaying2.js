import React from 'react'
import { Parallax } from 'react-parallax'
import img4 from "../assets/img4.webp"
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
function Overlaying2() {
    return (
        <>
        <div className="main">
            <div className="overlay">
             </div>
         <div className="overlay-content">
         <Parallax className="image" blur={{ min: -15, max: 15 }}  bgImage={img4} strength={800}> 
        <div className="content mediumfont">
        <ThirdPage/>
        </div>
               </Parallax>
         </div>
            </div>
            
        </>
)
}


export default Overlaying2
