import React from 'react'
import {Container, Row, Col} from "react-bootstrap";

const Footer = () => {
    return <footer>
            <Container>
                <Row>
                    <Col className='text-left py-3'>
                        <h4 style={{textDecorationLine: 'underline', textAlign: "center"}}>Contact Us</h4>
                        <ul className="footer-contact" style={{listStyleType: "none"}}>
                            <li><span>Address :</span>20 Chardonnay street, Saxenburg Park 1,<br/>Unit D8, Blackheath<br/> Cape Town </li>
                            <li><span>Cell-Phone :</span>+2781 561 2807</li>
                            <li><span>Email :</span>gabriel@strandinteriors.co.za</li>
                        </ul>
                    </Col>
                    <Col className='text-left py-3'>
                        <h4 style={{textDecorationLine: 'underline', textAlign: "center"}}>Quick Links</h4>
                        <ul className="footer-menu" style={{listStyleType: "none"}}>
                            <li><a href="about.html"><i className="zmdi zmdi-dot-circle"></i>Our Story</a></li>
                            <li><a href="leatherOptions.html"><i className="zmdi zmdi-dot-circle"></i>Leather
                                Options</a></li>
                            <li><a href="upholsteryOptions.html"><i className="zmdi zmdi-dot-circle"></i>Upholstery
                                Options</a></li>
                            <li><a href="#"><i className="zmdi zmdi-dot-circle"></i>Delivery Information</a></li>
                            <li><a href="#"><i className="zmdi zmdi-dot-circle"></i>Product Guarantees</a></li>
                            <li><a href="sitemap.xml"><i className="zmdi zmdi-dot-circle"></i>Sitemap</a></li>
                        </ul>
                    </Col>
                    <Col className='text-left py-3'>
                        <h4 style={{textDecorationLine: 'underline', textAlign: "center", fontWeight: "bolder"}}>Customers</h4>
                        <ul className="footer-menu" style={{listStyleType: "none"}}>
                            <li><a href="terms-conditions.html"><i className="zmdi zmdi-dot-circle"></i>Terms and
                                conditions</a></li>
                            <li><a href="faq.html"><i className="zmdi zmdi-dot-circle"></i>FAQ</a></li>
                            <li><a href="#"><i className="zmdi zmdi-dot-circle"></i>Manufacturers</a></li>
                            <li><a href="#"><i className="zmdi zmdi-dot-circle"></i>Suppliers</a></li>
                            <li><a href="#"><i className="zmdi zmdi-dot-circle"></i>Care Instructions</a></li>
                        </ul>
                    </Col>
                    <Col className='text-left py-3'>
                        <h4 style={{textDecorationLine: 'underline', textAlign: "center"}}>Your Choice Products</h4>
                        <div className="footer-product">
                            <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                    <div className="footer-thumb">
                                        <a href="#"><img src="img/footer/1.jpg" alt=""/></a>
                                        <div className="footer-thumb-info">
                                            <p><a href="#">Furniture Product<br/>Name</a></p>
                                            <h4 className="price-3">R 60.00</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xs-12">
                                    <div className="footer-thumb">
                                        <a href="#"><img src="img/footer/1.jpg" alt=""/></a>
                                        <div className="footer-thumb-info">
                                            <p><a href="#">Furniture Product<br/>Name</a></p>
                                            <h4 className="price-3">R 60.00</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright 2020 &copy; Byteservices. All rights reserved.

                    </Col>
                </Row>
            </Container>
    </footer>

}
export default Footer
