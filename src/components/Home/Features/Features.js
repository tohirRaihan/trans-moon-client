import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={3}>
                    <Card className='shadow h-100'>
                        <Card.Body>
                            <Card.Img
                                className="w-50"
                                src="https://cdn-icons.flaticon.com/png/512/2522/premium/2522915.png?token=exp=1635601130~hmac=6755847899e42e83adb83b35c3a6e711"
                            />
                            <Card.Title className="fw-bold mt-4">
                                Transparent Best Pricing
                            </Card.Title>
                            <Card.Text className="text-muted">
                                International supply chains the involves
                                challenging regulations of international.
                            </Card.Text>
                            <Link to="" className="text-decoration-none">
                                Read More
                                <FontAwesomeIcon
                                    className="ms-2"
                                    icon={faArrowRight}
                                />
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card className='shadow h-100'>
                        <Card.Body>
                            <Card.Img
                                className="w-50"
                                src="https://cdn-icons-png.flaticon.com/512/3129/3129647.png"
                            />
                            <Card.Title className="fw-bold mt-4">
                                The Real Time Tracking
                            </Card.Title>
                            <Card.Text className="text-muted">
                                Ensure customers’ supply chains are fully
                                compliant are by practices.
                            </Card.Text>
                            <Link to="" className="text-decoration-none">
                                Read More
                                <FontAwesomeIcon
                                    className="ms-2"
                                    icon={faArrowRight}
                                />
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card className='shadow h-100'>
                        <Card.Body>
                            <Card.Img
                                className="w-50"
                                src="https://cdn-icons.flaticon.com/png/512/3403/premium/3403042.png?token=exp=1635602019~hmac=1d99c8fcc5f6db9660f08ff1cda99c50"
                            />
                            <Card.Title className="fw-bold mt-4">
                                Security Sysytem Cargo
                            </Card.Title>
                            <Card.Text className="text-muted">
                                High security requirements and are certified to
                                local for reguation of standards.
                            </Card.Text>
                            <Link to="" className="text-decoration-none">
                                Read More
                                <FontAwesomeIcon
                                    className="ms-2"
                                    icon={faArrowRight}
                                />
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card className='shadow h-100'>
                        <Card.Body>
                            <Card.Img
                                className="w-50"
                                src="https://cdn-icons-png.flaticon.com/512/2897/2897818.png"
                            />
                            <Card.Title className="fw-bold mt-4">
                                Warehousing Storage
                            </Card.Title>
                            <Card.Text className="text-muted">
                                Depending on your product, we provide warehouse
                                activities. for warehouse.
                            </Card.Text>
                            <Link to="" className="text-decoration-none">
                                Read More
                                <FontAwesomeIcon
                                    className="ms-2"
                                    icon={faArrowRight}
                                />
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Features;
