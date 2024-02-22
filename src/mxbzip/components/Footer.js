import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './footer.css'
import img1 from '../images/logos_whatsapp-icon.webp'
import img2 from '../images/skill-icons_instagram.webp'
import img3 from '../images/devicon_linkedin.webp'
import logo from '../images/mxb_logo.webp'
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <footer className='footer-section'>
                <Container fluid className='footer-container'>
                    <Row className='top-footer'>
                        <Col className='col-md-3 logo text-center'>
                          <div>
                          <img src={logo} alt=''/>
                          </div>
                        </Col>
                        <Col className='col-md-7 menu-container'>
                            <ul>
                                <li>About Us</li>
                                <li>Real Estate</li>
                                <li>Investment</li>
                                <li>Career</li>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                               <NavLink to='/TermsAndCondition'><li>Terms & Conditions</li></NavLink> 

                            </ul>
                        </Col>
                        <Col className='col-md-2 social-media-icon'>
                            <div className='social-media-div'>Connect with us at</div>
                            <ul>
                                <li>
                                    <img src={img1} alt='' />
                                </li>
                                <li>
                                    <img src={img2} alt='' />
                                </li>
                                <li>
                                    <img src={img3} alt='' />
                                </li>
                            </ul>
                        </Col>
                    </Row>

                </Container>
                <Container fluid>
                    <Row className='middle-footer'>
                        <Col className='col-md-8 mx-auto'>
                        <p className='copyright-text'>© 2023. All rights reserved. MXB Consulting</p>
                        </Col>
                    </Row>
                </Container>
                {/* <Container fluid>
                    <Row className='bottom-footer'></Row>
                    </Container> */}
            </footer>
        </>
    )
}

export default Footer