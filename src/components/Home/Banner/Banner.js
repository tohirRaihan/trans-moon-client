import React from 'react';
import { Carousel } from 'react-bootstrap';
import BannerImageOne from '../../../images/banner-1.jpg';
import BannerImageTwo from '../../../images/banner-2.jpg';
import BannerImageThree from '../../../images/banner-3.jpg';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height="400"
                    src={BannerImageOne}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='display-4 fw-bold'>We safely move your <br /> valuable products</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height="400"
                    src={BannerImageTwo}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='display-4 fw-bold'>
                        Professional trucking and <br />
                        transportation services
                    </h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height="400"
                    src={BannerImageThree}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='display-4 fw-bold'>Making transportation <br /> fast and safe</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
