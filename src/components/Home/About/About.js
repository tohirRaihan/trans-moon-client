import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AboutImage from '../../../images/about.jpg';

const About = () => {
    return (
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6}>
                    <Image src={AboutImage} fluid />
                </Col>
                <Col xs={12} md={6}>
                    <p>Who are Trans Moon</p>
                    <h1 className='display-5 fw-bold my-3'>Best Courier & Parcel Services</h1>

                    <p>
                        Business applications through revolutionary catalysts
                        for procedures whereas processes.
                    </p>
                    <p>
                        Distinctively exploit optimal alignments for intuitive.
                        Quickly coordinate business applications through
                        revolutionary catalysts for chang the Seamlessly optimal
                        testing procedures whereas processes. Synerg stically
                        evolve 2.0 technologies rather than just in web & apps
                        development optimal alignments for intuitive.
                    </p>
                    <Link to="" className="text-decoration-none">
                        Read More
                        <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
