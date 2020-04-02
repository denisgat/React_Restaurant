import React from 'react';
// import React, { useState } from 'react';=
import {
    Navbar,
    Nav,
    NavDropdown,
    Carousel,
}
    from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Navbar className="sticky-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#" id="tophead"><h2>GATLINS BAR & GRILL</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <NavDropdown className="mx-3" title="Menu" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#Specials">Specials</NavDropdown.Item>
                            <NavDropdown.Item href="#Appetizers">Appetizers</NavDropdown.Item>
                            <NavDropdown.Item href="#MainCourse">Main Course</NavDropdown.Item>
                            <NavDropdown.Item href="#KidsMenu">Kids Menu</NavDropdown.Item>
                            <NavDropdown.Item href="#Sides">Sides</NavDropdown.Item>
                            <NavDropdown.Item href="#Drinks">Drinks</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="mx-3" href="#footer">Contact</Nav.Link>
                        <Nav.Link className="mx-3" eventKey={2} href="#reserve">Reserve</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Carousel style={{height: "90vh"}}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        // src="./images/img1-2.jpg"

                        src="https://upserve.com/media/sites/2/bigstock-125615822-1100x600.jpg"
                        alt="First slide"
                        style={{height: "90vh"}}
                    />
                    <Carousel.Caption>
                        <h3>Michelen star chef selected menu items for all to love</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.rd.com/wp-content/uploads/2018/12/drinks-at-a-bar-shutterstock_607933634.jpg"
                        alt="Third slide"
                        style={{height: "90vh"}}
                    />

                    <Carousel.Caption>
                        <h3>Drinks Served everyday of the week!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://foodies.co.uk/wp-content/uploads/2018/10/Festive-menu-Hotel-du-Vin-3-1920x1280.jpg"
                        alt="Third slide"
                        style={{height: "90vh"}}
                    />

                    <Carousel.Caption>
                        <h3>No ingredients spared to create amazing food items and drink concoctions</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Header