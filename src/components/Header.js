import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap";

const Header = () => {
return <header>
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Navbar.Brand href="/">Sofaworld</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="text-right">
                <Nav.Link href='/home'>Home</Nav.Link>
                <Nav.Link href='/accesories'>Accessories</Nav.Link>
                <Nav.Link href='/lookbook'>LookBook</Nav.Link>
                <Nav.Link href='/blog'>Blog</Nav.Link>
                <Nav.Link href='/pages'>Pages</Nav.Link>
                <Nav.Link href='/aboutus'>About-Us</Nav.Link>
                <Nav.Link href='/contactus'>Contact-Us</Nav.Link>
                {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                {/*    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                {/*    <NavDropdown.Divider />*/}
                {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                {/*</NavDropdown>*/}
            </Nav>

        </Navbar.Collapse>
    </Navbar>
        </header>

}
export default Header
