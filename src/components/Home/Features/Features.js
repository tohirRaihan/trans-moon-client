import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TruckImage from '../../../images/icons/delivery-truck.png';
import VesselImage from '../../../images/icons/vessel.png';
import ConveyorImage from '../../../images/icons/conveyor-belt.png';
import WarehouseImage from '../../../images/icons/warehouse.png';


const Features = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={3}>
                    <Card className='shadow h-100'>
                        <Card.Body>
                            <Card.Img
                                className="w-50"
                                src={TruckImage}
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
                                src={VesselImage}
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
                                src={ConveyorImage}
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
                                src={WarehouseImage}
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
