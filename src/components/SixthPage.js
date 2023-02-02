import React from 'react'
import Card from "../components/card/Card";
import { personCard } from '../config/db'
// import { Parallax } from 'react-parallax'
import img9 from "../assets/img9.jpeg"
import { Parallax } from 'react-parallax';
function SixthPage() {
    return (
        <>
          <div className="backing">
            <div className="row mx-4 mt-5 ">
                <div className="text-center bigfont text-primary col-12  wow   animate__animated animate__fadeInUp">
                    <h>MEET OUR TEAM</h>
                </div>
                <div className=" wow  animate__animated animate__fadeInUp">
                <p className="my-3 mediumfont justifytext">The name "Planetably" is new to the renewable and clean world; however,
                    our team indicates otherwise. We are a sincere company formed by an amalgamation of like-minded professionals
                    with diverse expertise.</p>
                    </div>
                <div className="row mx-md-4 mx-lg-5">
                    {personCard?.map(person =>
                           <div className="container col-12 my-3 col-lg-6 col-md-6 mx-0  ">
                            <div className="d-flex justify-content-center  wow animate__animated animate__bounceIn ">
                               {/* <Parallax className="image content" blur={3} bgImage={img9} strength={800}> */}
                               <Card image={person.image} name={person.name} academics={person.academics} expyears={person.expyear} />
                               {/* </Parallax> */}
                            </div>
                        </div>
                       )}
                </div>
            </div>
            </div>
           
        </>
    )
}
export default SixthPage
