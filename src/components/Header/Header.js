import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// Add navigation
const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="text-white text-uppercase">Programming School</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="text-decoration-none text-white px-2" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to="/home">Home</NavLink>
                            <NavLink className="text-decoration-none text-white px-2" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to="/course">Courses</NavLink>
                            <NavLink className="text-decoration-none text-white px-2" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to="/about">About</NavLink>
                            <NavLink className="text-decoration-none text-white px-2" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to="/contact">Contact</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;