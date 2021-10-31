import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://secure-badlands-19900.herokuapp.com/services')
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <Container>
            <h1 className="fw-bold mb-5 text-center">
                Find The Right Service For You
            </h1>
            <Row>
                {services.map((service) => (
                    <Service key={service._id} service={service} />
                ))}
            </Row>
        </Container>
    );
};

export default Services;
