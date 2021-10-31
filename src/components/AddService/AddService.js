import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const AddService = () => {
    const titleRef = useRef();
    const priceRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();

    const handleNewService = (event) => {
        event.preventDefault();
        const title = titleRef.current.value;
        const shortDescription = descriptionRef.current.value;
        const price = priceRef.current.value;
        const image = imageRef.current.value;
        const newService = {
            title,
            shortDescription,
            price,
            image
        };

        // POST new service API
        fetch('https://secure-badlands-19900.herokuapp.com/services', {
            method: 'POST',
            body: JSON.stringify(newService),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert('Create new service successfully!');
                    event.target.reset();
                } else {
                    alert('Something went wrong please try again');
                }
                console.log(data);
            });
    };
    return (
        <main className="add-service my-5">
            <Container>
                <h1 className="display-5 fw-bold text-center mb-5">
                    Add A New Service
                </h1>

                <Form onSubmit={handleNewService}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control
                            type="text"
                            placeholder="Name of the service"
                            ref={titleRef}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="price">
                        <Form.Control
                            type="text"
                            placeholder="Service price"
                            ref={priceRef}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="image">
                        <Form.Control
                            type="text"
                            placeholder="Image url link"
                            ref={imageRef}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Short description"
                            ref={descriptionRef}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add New Service
                    </Button>
                </Form>
            </Container>
        </main>
    );
};

export default AddService;
