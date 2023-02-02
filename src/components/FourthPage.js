import React from 'react'
import { Accordion } from 'react-bootstrap'
import { contents } from '../config/db'
import { Parallax } from 'react-parallax'
import img7 from "../assets/img7.jpeg"
import img2 from "../assets/img2.webp"

function FourthPage() {
    return (
        <>
         <div className="wow">
                <div className="container row">
                    <div className="col">
                        <div className="wow animate__animated animate__fadeInUp ">
                        <h1 className="bigfont text-primary bigfont   text-center ">SCOPE</h1>
                        <div className="container text-center "><p className="mediumfont justifytext">Planetably's team of multi-disciplinary professionals offers a wide range of
                            consulting, construction, supply, engineering, and design services for a wide
                            variety of energy clients including contractors, investors, utilities, and so on.</p></div></div>
                            {/* <Parallax className="image" blur={5} bgImage={img7} strength={800}/> */}
                        <div className="container row mt-5 mx-5 fourthflex">
                           {contents.map(content =>
                                <div className="mx-0 my-5 wow animate__animated animate__fadeInUp  margining col-6 col-md-6">
                                    <div className="text-center ">
                                    <h className="text-primary mediumfont">{content.heading}</h>
                                    <p className="mt-2 mx-4 mediumfont ">{content.Paragraph}</p>
                                    </div>
                                    <div className="conatiner row ">
                                        <div className="col">
                                 <Accordion className="mt-5">
                                         <Accordion.Item eventKey="0">
                                            <div ><Accordion.Header>SEE MORE</Accordion.Header></div> 
                                              
                                  <Accordion.Body>
                                         <div className=" row bg-info  ">
                                        {/* <Parallax className="image" blur={3} bgImage={img2} strength={800}> */}
                                       <div className="col ">
                                            <ul className="accordionflex">
                                           <div className="smallfont">{content.subtitles?.map((item) => <li>{item}</li>)}</div>     
                                            </ul>
                                        </div>
                                        {/* </Parallax> */}
                                    </div>
                              </Accordion.Body>
                         </Accordion.Item>
                                     </Accordion>
                                     </div>
                                     </div>
                                    
                     </div>
                            )}

                   
                     </div>
                     {/* </Parallax> */}
                    
                    </div>
                 
                   
                </div>
                <hr />
            </div>

      
        </>
    )
}

export default FourthPage
