import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <Col xs={12} md={4}>
            <Card className="h-100">
                <Card.Img
                    variant="top"
                    src="https://picsum.photos/id/661/356/212?blur"
                />
                <Card.Body>
                    <Card.Title className="fw-bold">
                        Delivery within 24 hours
                    </Card.Title>
                    <Card.Text className="lead text-muted">
                        Get 24 Hours delivery, fast. Easy online ordering for
                        takeout and delivery from 24 Hours as you need. Deals
                        and promos available.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <div className="course-price">
                        <span className="text-info fw-bold h3">$150</span>
                    </div>
                    <div className="course-detail">
                        <button className='btn btn-warning'>
                            Order Now
                            <FontAwesomeIcon className='ms-2' icon={faArrowRight} />
                        </button>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;
