import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './mxbinvestment.css'
import img1 from '../images/Visionlogo.webp'
import img2 from '../images/msgleft-img.webp'
import img3 from '../images/msgright-img.webp'
//import { NavLink } from 'react-router-dom';

import topright from '../images/top-right.webp'
import bottomleft from '../images/bottom-left.webp'

const Mxbinvestment = () => {
    // const paragraph = "MXB Investment, established in 1984 in Riyadh, KSA, is a Shariah-compliant Family-Owned Investment company with investments spread across multiple asset classes such as real estate, public and private equities, structured investments & DPM. We firmly believe in the power of ethical investing, guided by Islamic principles."
    return (
        <>
            <div className='investment-bg'>
                {/* investmentsection starts here */}
                <section className='investment-section'>
                    <Container>
                        <Row>
                            {/* <Container className='container'>
                                <Row>
                                    <Col className='col-md-10 mx-auto'>
                                    <div className='text-center investment-bg'>
                                        <div>
                                            <img src={img1} alt='' className='investment-img' />
                                        </div>
                                    </div></Col>
                                </Row>
                            </Container> */}
                            <div className='img-text text-center'>
                                {/* <div className='topright'><img src={topright} alt='' /></div>
                                <div className='bottomleft'><img src={bottomleft} alt='' /></div> */}
                                <Container>
                                    <Row>
                                        <Col className='col-md-9'>
                                            <h2 className='img-heading'>We are <br /> MXB Investment.</h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='col-md-4'></Col>
                                        <Col className='col-md-8'>
                                            <p className='img-para'>MXB Investment, established in 1984 in Riyadh, KSA, is a Shariah-compliant Family-Owned Investment company with investments spread across multiple asset classes such as real estate, public and private equities, structured investments & DPM. We firmly believe in the power of ethical investing, guided by Islamic principles.</p>
                                            <button className='mt-5'>Learn More</button>
                                        </Col>

                                    </Row>
                                </Container>
                            </div>
                        </Row>
                    </Container>
                </section>

                <section className='embracing-section'>
                    <Container>
                        <Row className='g-0 mx-auto'>
                            <Col className='col-md-6 paddingleft'>
                                <h2>Embracing <span className='bottom-border'>Saudi Vision 2030</span><br />
                                    <span className='boldheading'>Dedicated to growth and prosperity</span> </h2>

                                {/* <div className='mt-4'><p className='embrac-para1'>We have been actively participating in furthering the Saudi Vision 2030 that strives to transform</p></div> */}

                                <Row className='paragraph-div'>



                                    <p className='embrac-para2'>MXB is committed to aligning itself with the Saudi Vision 2030, contributing to the real estate and investments sector as part of a collaborative effort to meet the ambitious objectives outlined by this dynamic and visionary plan. This commitment stems from the company's long family history of contributing to the Saudi economy, which dates back three generations. Through our contributions to the development of the Kingdom of Saudi Arabia, which is being guided by the wise leadership of His Majesty King Salman bin Abdulaziz Al-Saud, Custodian of the Two Holy Mosques, and His Royal Highness Prince Muhammad bin Salman bin Abdulaziz, we are laying foundations for a more prosperous future for everyone through our relentless effort in building Saudi Arabia’s real estate, construction and investment industries.</p>



                                </Row>

                            </Col>
                            <Col className='col-md-6 reltv-potn'>
                                <img src={img1} alt='' className='vision-logo' />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className='message-section pt-4 mt-4'>
                    <Container className='paddingtop'>
                        <div className='leftmsgimg'>
                            <img src={img2} alt=''/>
                        </div>
                        <Row>
                            <h4 className='msg-heading'>Message from the Chairman</h4>

                           
                            <div className=''>
                                <p className='msg-para text-justify'>Our goal is to create long-term value for our shareholders by making sustainable investments in diverse asset classes while adhering to Islamic principles. We believe that our success is not only measured by financial gains but also by the positive impact we make on the communities we operate in. At MXB, we are committed to creating a better future for all stakeholders and contributing to the growth and development of our people, communities, and nation.
                                    </p>

                                <p className='mt-5 sub-para'>Mrs. Nada Mohammed Alsubeaei<br />
                                Chairman, MXB Investment Company</p>
                            </div>
                            {/* </Col> */}

                            {/* <Col className='col-md-1'></Col> */}
                        </Row>
                        <Row className='justify-content-center'>
                        <button className='msg-btn'>Read More</button>

                        </Row>
                        <div className='rightmsgimg'>
                            <img src={img3} alt=''/>
                        </div>
                    </Container>
                </section>
            </div>
        </>
    )
}

export default Mxbinvestment