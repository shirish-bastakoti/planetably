import React from 'react'
import { Carousel } from 'react-bootstrap'
import { sliders } from '../config/db'

function FirstPage() {
    return (
        <>
        <section>
                <Carousel fade interval={2000}>
                    {sliders.map(slider => <Carousel.Item>
                        <div className="w-100 position-relative">
                            <img
                                className="d-block w-100 slider_image"
                                src={slider.image}
                                alt="First slide"
                            />
                            <div className="carousel_overlay" />
                        </div>
                        <Carousel.Caption>
                            <h3>{slider.title}</h3>
                            <p>{slider.Subtitle}</p>
                        </Carousel.Caption>
                    </Carousel.Item>)}
                </Carousel>
            </section>
            
        </>
    )
}

export default FirstPage
