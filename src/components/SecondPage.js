import React from 'react'
// import img4 from "../assets/img4.webp"
import { Parallax } from 'react-parallax'
// import img10 from "../assets/img10.jpeg"
import img11 from "../assets/img11.jpeg"
function SecondPage() {
    return (
        <>
        <div className="main ">
            <div className="overlay"></div>
            {/* <img src={img4} className="image"/> */}
                    <Parallax className="image"  bgImage={img11} strength={800}/> 
            <div className="overlay-content content  text-white">
        <div className="wow animate__animated animate__fadeInUp">
            <div className="container row text-center">
                <div className="col mx-3 ">
   <h2 className="text-primary mt-5 text-center bigfont">OUR COMPANY<hr/></h2>
   
            <p className=" mx-lg-5 lg-marginleft mediumfont justifytext">
                Planetably Pvt. Ltd. is an energy company that has, since the start, defined its operation through the most favorable 
                and sustainable energy resources. 
                We play a leading role in providing renewable
                 and clean energy resources that can be used in miniature firms providing fuels in communities or mass distributing it. 
                 Bearing the immediate needs, 
                along with the sustainable future of the clients in mind, our company provides clean energy solutions locally and in multiple 
                cities and neighborhoods. Our clients are remarkably diverse: large and small, private and public, for-profit and nonprofit. 
                We help them grow, sustain and transform: whatever it takes to embrace their future and the future of our planet.
         </p>
         
             </div>
             </div>
             </div>

             </div>
             </div>
        </>
        )
}
export default SecondPage
