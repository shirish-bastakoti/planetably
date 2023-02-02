import React from 'react'
// import { Overlay } from 'react-bootstrap'
import { Parallax } from 'react-parallax'
import img4 from "../src/assets/img4.webp"
import SecondPage from './components/SecondPage'
function ImageOne(props) {
    return (
        <div>
        <Parallax className="image" blur={{ min: -15, max: 15 }}  bgImage={img4} strength={800}> 
        <div className="content mediumfont">
        <SecondPage/>
        </div>
               </Parallax>
           </div>
    )
}
export default ImageOne
