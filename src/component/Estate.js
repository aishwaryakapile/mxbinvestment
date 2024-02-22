import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './estate.css'
import img1 from '../images/underdevlopment.webp'
import img2 from '../images/developproperty.webp'
import img3 from '../images/real-estate-development-fund.webp'
import img4 from '../images/indirect-real-estate.webp'
import img5 from '../images/directequity.webp'
import img6 from '../images/privateequity.webp'
import img7 from '../images/Discretionaryimg.webp'
import img8 from '../images/cash.webp'
const Estate = () => {
    return (
        <>
            <section className='real-estate-section'>
                <Container fluid className='real-estate-bg'>
                    <Row>
                        <Col>
                            <h4 className='real-estate-heading'>Real estate & infrastructure investments</h4>
                            <p className='real-estate-para text-center'>Our real estate portfolio goes beyond direct and active investment in land, properties and funds to indirect investments through our<br /> collaboration with MASIC on its investments in the real estate industry.</p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className='real-estate'>
                    <Row className='real-estate-row1'>
                        <Col className='col-md-3'>
                            <div className='text-center'>
                                <div className='img-box'>
                                    <img src={img1} alt='' />
                                    <h4 className='img-text'>Under development<br /> properties</h4>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-md-3'>
                            <div className='text-center'>
                                <div className='img-box'>
                                    <img src={img2} alt='' />
                                    <h4 className='img-text'>Developed <br /> properties</h4>

                                </div>
                            </div>
                        </Col>
                        <Col className='col-md-3'>
                            <div className='text-center'>
                                <div className='img-box'>
                                    <img src={img3} alt='' />
                                    <h4 className='img-text'>Real estate <br /> development funds </h4>
                                </div></div>
                        </Col>
                        <Col className='col-md-3'>
                            <div className='text-center'>
                                <div className='img-box'>
                                    <img src={img4} alt='' />
                                    <h4 className='img-text'>Indirect real <br /> estate </h4>
                                </div></div>
                        </Col>
                    </Row>
                    <Row> <Col><button>Learn More</button></Col></Row>
                </Container>
                <Container fluid className='non-real-estate-bg'>
                    <Row>
                        <Col>
                            <h4 className='non-real-estate-heading'>Non real estate investments</h4>
                            <p className='non-real-estate-para text-center'>From equity to alternative assets, we carefully curate our portfolio beyond our realm of real estate</p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className='non-real-estate'>
                    <Row className='non-real-estate-row1'>
                        <Col className='col-md-3'>
                            <div className='text-center'>
                                <div className='img-box'>
                                    <img src={img5} alt='' />
                                    <h4 className='img-text'>Direct equity</h4>

                                </div>
                            </div>
                        </Col>
                        <Col className='col-md-3'>
                            <div className='text-center'>
                                <div className='img-box'>
                                    <img src={img6} alt='' />
                                    <h4 className='img-text'>Private equity funds</h4>

                                </div>
                            </div>
                        </Col>
                        <Col className='col-md-3'>
                            <div className='text-center'>
                                <div className='img-box'>
                                    <img src={img7} alt='' />
                                    <h4 className='img-text'>Public equity</h4>
                                </div></div>
                        </Col>
                        <Col className='col-md-3'>
                            <div className='text-center'>
                                <div className='img-box'>
                                    <img src={img8} alt='' />
                                    <h4 className='img-text'>Fixed deposits & <br />mutual funds</h4>
                                </div></div>
                        </Col>
                    </Row>
                    <Row><Col><button>Learn More</button></Col></Row>
                </Container>
            </section>
        </>
    )
}

export default Estate