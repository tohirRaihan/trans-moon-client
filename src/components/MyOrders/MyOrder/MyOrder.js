import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const MyOrder = ({ order, count }) => {
    console.log(order);
    const { _id, serviceId, phone, address, status } = order;
    const [service, setService] = useState({});

    // GET service API
    useEffect(() => {
        fetch(
            `https://secure-badlands-19900.herokuapp.com/services/${serviceId}`
        )
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    // DELETE order API
    const handleDeleteOrder = (event, id) => {
        console.log(id);
        const confirmDelete = window.confirm(
            'Do you realy want to delete this order?'
        );
        if (confirmDelete) {
            fetch(`https://secure-badlands-19900.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Order deleted successfully!');
                        event.target.closest('tr').style.display = 'none';
                    }
                });
        }
    };

    return (
        <tr>
            <td>{count}</td>
            <td>{service?.title}</td>
            <td>{service?.price}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>{status}</td>
            <td>
                <Button
                    onClick={(e) => {
                        handleDeleteOrder(e, _id);
                    }}
                    variant="danger"
                    size="sm"
                >
                    X
                </Button>
            </td>
        </tr>
    );
};

export default MyOrder;
