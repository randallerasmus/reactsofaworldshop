import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap";

const Header = () => {
return <header>
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>

        <Navbar.Brand href="/">&#9776;</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Container>
        <Navbar.Collapse id="basic-navbar-nav">
            {/*todo: to add the logo of the sofaworld*/}
            {/*<Navbar.Brand href="#home">*/}
            {/*    <img*/}
            {/*        src=""*/}
            {/*        width="30"*/}
            {/*        height="30"*/}
            {/*        className="d-inline-block align-top"*/}
            {/*        alt="React Bootstrap logo"*/}
            {/*    />*/}
            {/*</Navbar.Brand>*/}
            <Nav className="m-auto">
                <Nav.Link href='/home'>SOFAWORLD</Nav.Link>
                {/*<Nav.Link href='/accesories'>Accessories</Nav.Link>*/}
                {/*<Nav.Link href='/lookbook'>LookBook</Nav.Link>*/}
                {/*<Nav.Link href='/blog'>Blog</Nav.Link>*/}
                {/*<Nav.Link href='/pages'>Pages</Nav.Link>*/}
                {/*<Nav.Link href='/aboutus'>About-Us</Nav.Link>*/}
                {/*<Nav.Link href='/contactus'>Contact-Us</Nav.Link>*/}
                <Container className='text-right'>
                    <Nav.Link href='/cart'><i className='fas fa-shopping-cart'/>Cart</Nav.Link>
                    <Nav.Link href='/signin'><i className='fas fa-user'/>Sign In</Nav.Link>
                </Container>

                {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                {/*    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                {/*    <NavDropdown.Divider />*/}
                {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                {/*</NavDropdown>*/}

            </Nav>

        </Navbar.Collapse>
</Container>
    </Navbar>
        </header>

}
export default Header
