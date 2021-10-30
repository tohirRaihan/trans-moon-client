import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    return (
        <Container>
            <h1 className="fw-bold mb-5 text-center">Find The Right Service For You</h1>
            <Row>
                <Service />
            </Row>
        </Container>
    );
};

export default Services;
