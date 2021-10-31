import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const { serviceId } = useParams('id');
    const [service, setService] = useState({});
    const { user } = useAuth();
    const phoneRef = useRef();
    const addressRef = useRef();

    console.log(user);

    // GET service API
    useEffect(() => {
        fetch(
            `https://secure-badlands-19900.herokuapp.com/services/${serviceId}`
        )
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    // Place a new order --------------------------------------------------
    const handleOrder = (event) => {
        event.preventDefault();
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const newOrder = {
            phone,
            address,
            userId: user.uid,
            userEmail: user.email,
            serviceId: service._id,
            status: 'pending'
        };
        // POST new order API
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            body: JSON.stringify(newOrder),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert('Order placed successfully!');
                    event.target.reset();
                } else {
                    alert('Something went wrong please try again');
                }
                console.log(data);
            });
    };

    return (
        <main className="placeorder my-5">
            <section className="service-info">
                <Container>
                    <Link to="/home" className="btn btn-sm btn-dark mb-3">
                        Go Back Home
                    </Link>
                    <Row>
                        <Col xs={12} md={6}>
                            <Image src={service?.image} fluid />
                        </Col>
                        <Col xs={12} md={6}>
                            <h1>{service?.title}</h1>
                            <p className="text-muted">
                                {service?.shortDescription}
                            </p>
                            <p className="h1 fw-bold text-info">
                                ${service?.price}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="placeorder-info my-5">
                <h1 className="display-5 fw-bold text-center">
                    Place An Order
                </h1>
                <Container>
                    <p>
                        <span className="fw-bold">User Name:</span>{' '}
                        {user.displayName}
                    </p>
                    <p>
                        <span className="fw-bold">User Email:</span>{' '}
                        {user.email}
                    </p>
                    <Form onSubmit={handleOrder}>
                        <Form.Group className="mb-3" controlId="phoneNumbeer">
                            <Form.Control
                                type="text"
                                placeholder="Your phone number"
                                ref={phoneRef}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="shippingAddress"
                        >
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="Your shipping address"
                                ref={addressRef}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Place Order
                        </Button>
                    </Form>
                </Container>
            </section>
        </main>
    );
};

export default PlaceOrder;
