import React from 'react';
import { Carousel } from 'react-bootstrap';
import demoimage from "./assets/demo1.png"
import demoimage1 from "./assets/demo2.png"
import demoimage2 from "./assets/demo5.png"

const Banner = () => {
    return (
        <div className="home-banner">
            <Carousel interval={2000} controls={false} indicators={true}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={demoimage}
                        alt="Business Solution 1"
                    />
                    <Carousel.Caption>
                       
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={demoimage1}
                        alt="Business Solution 2"
                    />
                    <Carousel.Caption>
                       
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={demoimage2}
                        alt="Business Solution 3"
                    />
                    <Carousel.Caption>
                     
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
