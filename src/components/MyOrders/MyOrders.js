import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import MyOrder from './MyOrder/MyOrder';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    let count = 1;

    // GET orders API
    useEffect(() => {
        fetch(`https://secure-badlands-19900.herokuapp.com/orders/${user.uid}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    return (
        <main className="my-orders my-5">
            <Container>
                <h1 className="display-5 fw-bold text-center mb-5">
                    All Of My Orders
                </h1>

                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Service Name</th>
                            <th>Service Price</th>
                            <th>Phone No.</th>
                            <th>Shipping Address</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <MyOrder key={order._id} order={order} count={count++} />
                        ))}
                    </tbody>
                </Table>
            </Container>
        </main>
    );
};

export default MyOrders;
