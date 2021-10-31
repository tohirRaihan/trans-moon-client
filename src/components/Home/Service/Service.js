import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { _id, title, shortDescription, image, price } = props.service;

    return (
        <Col xs={12} md={4}>
            <Card className="h-100">
                <Card.Img height='232' variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="fw-bold">{title}</Card.Title>
                    <Card.Text className="lead text-muted">
                        {shortDescription.substring(0,100)}...
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <div className="course-price">
                        <span className="text-info fw-bold h3">${price}</span>
                    </div>
                    <div className="course-detail">
                        <Link className='btn btn-warning' to={`/placeorder/${_id}`}>
                            Order Now
                            <FontAwesomeIcon
                                className="ms-2"
                                icon={faArrowRight}
                            />
                        </Link>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;
