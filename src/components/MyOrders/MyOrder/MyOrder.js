import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const MyOrder = ({ order, count }) => {
    const { serviceId, phone, address, status, } = order;
    const [service, setService] = useState({});

    // GET service API
    useEffect(() => {
        fetch(
            `https://secure-badlands-19900.herokuapp.com/services/${serviceId}`
        )
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    return (
        <tr>
            <td>{count}</td>
            <td>{service?.title}</td>
            <td>{service?.price}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>{status}</td>
            <td>
                <Button variant="danger" size="sm">
                    X
                </Button>
            </td>
        </tr>
    );
};

export default MyOrder;
