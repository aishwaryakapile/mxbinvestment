import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './realstatebody.css'
//import { NavLink } from 'react-router-dom';

import rsimg from '../images/rs-about.webp'
import sets1 from '../images/sets1.webp'
import sets2 from '../images/sets2.webp'
import sets3 from '../images/sets3.webp'
import sets4 from '../images/sets4.webp'
import sets5 from '../images/sets5.webp'

// import bottomleft from '../images/bottom-left.webp'

const RealStateBody = () => {

    const data = [
        { id: 1, img: sets1, heading: "Modern amenities", para: 'We focus on seamlessly blending functionality with convenience and comfort, to enhance the overall living experience in our properties' },
        { id: 2, img: sets2, heading: "State-of-the-art infrastructure", para: 'From advanced utility systems to connectivity, we believe that a robust infrastructure is critical to building thriving communities' },
        { id: 3, img: sets3, heading: "Latest technology", para: 'We equip our properties with cutting-edge technology to deliver superior comfort, convenience, connectivity and security' },
        { id: 4, img: sets4, heading: "Sustainable development", para: 'We are committed to creating eco-friendly communities by incorporating sustainable design principles, energy-efficient feature and responsible construction practices in development' },
        { id: 5, img: sets5, heading: "Innovative architecture", para: 'We build structures that are not only visually striking but also functional and sustainable helping us achieve our vision of inspiring and uplifting' },
    ];

    return (
        <>
            <section className='rsbody-section'>
                <Container>
                    <Row>
                        <div className='text-box text-center'>
                            {/* <div className='topright'><img src={topright} alt='' /></div>
                        <div className='bottomleft'><img src={bottomleft} alt='' /></div> */}
                            <Container>
                                <Row>
                                    <Col className='col-md-5'>
                                        <img src={rsimg} alt='' />
                                    </Col>
                                    <Col className='col-md-6 px-5 mx-auto'>
                                        <h2>Empowering <br/>Growth and Progress</h2>
                                        <p className='mt-5'>Firmly aligned with the Saudi Vision 2030 of economic diversification and sustainable development, we have been building upon the strong foundation set by our leaders. Our exceptional portfolio of properties has been meticulously selected, designed and developed to embody sustainable practices and visionary architecture</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Row>
                </Container>
            </section>

            <section className='rs-sets-section'>
                <Container>
                    <Row>
                        <div className='text-box text-center'>
                            <Container>
                                <Row className='header'>
                                    <h2>What sets us apart</h2>
                                    <p>Committed to building purposeful infrastructure</p>
                                </Row>
                                <Row className='justify-content-center g-5 my-3'>

                                    {data.map((d, i) => (
                                        <Col className='col-md-5 mx-3  img-box'>
                                            <div className='inner-img-div'>
                                                <img src={d.img} alt='' />
                                            </div>
                                            <div>
                                                <h2>{d.heading}</h2>
                                                <p>{d.para}</p>
                                            </div>
                                        </Col>

                                    ))}


                                    {/* <Col className='col-md-5'>
                                <img src={rsimg} alt='' />
                            </Col>
                            <Col className='col-md-7 px-5 mx-auto'>
                                <h2>Lorem ipsum dolor sit amet, consectetur</h2>
                                <p className='mt-5'>Firmly aligned with the Saudi Vision 2030 of economic diversification and sustainable development, we have been building upon the strong foundation set by our leaders. Our exceptional portfolio of properties has been meticulously selected, designed and developed to embody sustainable practices and visionary architecture</p>
                            </Col> */}
                                </Row>
                            </Container>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default RealStateBody
