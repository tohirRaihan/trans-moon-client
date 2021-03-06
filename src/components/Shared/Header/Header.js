import React from 'react';
import Logo from '../../../images/logo.png';
import User from '../../../images/user.png';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <header>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
                sticky="top"
            >
                <Container>
                    <Link className="navbar-brand" to="/">
                        <img
                            alt=""
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Trans Moon
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto me-4">
                            <NavLink
                                to="/home"
                                activeClassName="active"
                                className="nav-link"
                            >
                                Home
                            </NavLink>
                            {user.email ? (
                                <>
                                    <NavLink
                                        to="/my-orders"
                                        activeClassName="active"
                                        className="nav-link"
                                    >
                                        My Orders
                                    </NavLink>
                                    <NavLink
                                        to="/manage-all-orders"
                                        activeClassName="active"
                                        className="nav-link"
                                    >
                                        Manage All Orders
                                    </NavLink>
                                    <NavLink
                                        to="/add-service"
                                        activeClassName="active"
                                        className="nav-link"
                                    >
                                        Add A New Service
                                    </NavLink>
                                </>
                            ) : (
                                ''
                            )}
                        </Nav>
                        {user?.email ? (
                            <>
                                <Image src={User} rounded fluid width="30" />
                                <Navbar.Text className="ms-1 me-3">
                                    <a href="#login">
                                        {user?.displayName || user?.email}
                                    </a>
                                </Navbar.Text>
                                <Button
                                    onClick={logOut}
                                    variant="danger"
                                    size="sm"
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <Link
                                to="/login"
                                className="btn btn-sm btn-primary"
                            >
                                Login
                            </Link>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
