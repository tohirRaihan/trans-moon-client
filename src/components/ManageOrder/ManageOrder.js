import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const ManageOrder = ({ order, count }) => {
    const { _id, userEmail, serviceId, phone, address, status } = order;
    const [service, setService] = useState({});
    const [productStatus, setProductStatus] = useState(status);

    // GET service API
    useEffect(() => {
        fetch(
            `https://secure-badlands-19900.herokuapp.com/services/${serviceId}`
        )
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    // UPDATE product status
    const handleApproval = (event) => {
        fetch(`https://secure-badlands-19900.herokuapp.com/orders/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert('Product approved successfully');
                    event.target
                        .closest('tr')
                        .querySelector('.product-status').innerText =
                        'approved';
                    setProductStatus('approved');
                }
            });
    };

    // DELETE order API
    const handleDeleteOrder = (event, id) => {
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
            <td>{userEmail}</td>
            <td>{service?.title}</td>
            <td>${service?.price}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td className="product-status">{status}</td>
            <td>
                <ButtonGroup size="sm">
                    {productStatus === 'pending' ? (
                        <Button onClick={handleApproval} variant="success">
                            Approved
                        </Button>
                    ) : (
                        ''
                    )}

                    <Button
                        onClick={(e) => {
                            handleDeleteOrder(e, _id);
                        }}
                        variant="danger"
                    >
                        X
                    </Button>
                </ButtonGroup>
            </td>
        </tr>
    );
};

export default ManageOrder;
