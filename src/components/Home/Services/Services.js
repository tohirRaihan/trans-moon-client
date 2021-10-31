import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://secure-badlands-19900.herokuapp.com/services')
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <Spinner
                className="d-block mx-auto mt-5"
                animation="border"
                varient="primary"
            />
        );
    }
    return (
        <Container>
            <h1 className="fw-bold mb-5 text-center">
                Find The Right Service For You
            </h1>
            <Row className='g-4'>
                {services.map((service) => (
                    <Service key={service._id} service={service} />
                ))}
            </Row>
        </Container>
    );
};

export default Services;
