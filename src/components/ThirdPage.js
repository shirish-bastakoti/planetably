import React from 'react'
import { contentthree } from '../config/db'
import { Parallax } from 'react-parallax'
import img5 from "../assets/img5.webp"
function ThirdPage() {
    return (
        <>
        
        {/* <div className="main">
        <div className="overlay">
             </div>
             <div className="overlay-content"> */}
              {/* <Parallax className="image" blur={3} bgImage={img5} strength={800}> */}
            <div className=" container row wow ">
                {contentthree.map(content =>
                   
                    <div className="contentlast ">
                        <div className=" bigfont text-primary bg-white col wow animate__animated animate__fadeInUp my-3 ">
                            <div className="text-center"><h className="text-center">{content.title}</h></div>
                          </div>
                        <div className="container row mx-lg-5 mx-md-4 mx-0">
                            <div className="col  my-4 wow animate__animated animate__fadeInUp">
                                <p className="mt-1 mediumfont justifytext">{content.paragraph}</p>
                                <div className="mediumfont  mt-5 justifytext">
                                <ul>
                                {content.subtitle?.map((item) => <li>{item}</li>)}
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
             
                    )}
                <hr />

            </div>
            {/* </Parallax> */}
            
            {/* </div>
            </div> */}
           

        </>
    )
}
export default ThirdPage
