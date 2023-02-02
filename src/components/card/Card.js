import React, { useState } from 'react'
// import { Card as BootstrapCard } from "react-bootstrap"
function Card(props) {
    const { image, name, academics, expyears } = props;
    // console.log(props)
    const[show,setshow]=useState(false);
  
    const handleChange=()=>{

    }
    return (
        <div>

            {/* <BootstrapCard className="mx-3 bootcard">
                <div className="d-flex flex-row justify-content-center"> <BootstrapCard.Img variant="top" src={image} className="card_image " /></div>
                <BootstrapCard.Body >
                    <div className="d-flex flex-column align-items-center justify-content-center mt-4">
                    <BootstrapCard.Title>{name}</BootstrapCard.Title>
                    <BootstrapCard.Subtitle>{academics}</BootstrapCard.Subtitle>
                    <BootstrapCard.Subtitle>Education level</BootstrapCard.Subtitle>
                    <BootstrapCard.Subtitle>Experience:{expyears}</BootstrapCard.Subtitle>
                    </div>
                </BootstrapCard.Body>
            </BootstrapCard> */}
            
            <div className="mainone">
                <div className="overlayone"></div>
            <img src={image} className="card_image"/>
            <div className="overlay-content d-flex flex-column align-items-center justify-content-center text-white " >
                <div className="hide">
                <p>{name}</p>
                <p>{academics}</p>
                <p>Education level</p>
                <p>Experience:{expyears}</p>
                </div>

            </div>
            </div>
            </div>
        
    )
}

export default Card
