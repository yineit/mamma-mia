import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../assets/img/1.png"
import banner2 from "../assets/img/2.png"
import banner3 from "../assets/img/3.png"


const Header = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    );
};
export default Header;
