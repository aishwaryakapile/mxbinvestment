import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './explore_investment.css'
import img1 from '../images/exploreimg.webp'

const Explore_investment = () => {
    return (
        <>
            <section className='explore-section mb-2'>
                <Container>
                    <Row>
                        <Col className=''>
                            <img src={img1} alt='' className='explore-image' />
                        </Col>
                    </Row>

                </Container>
                <Container className='explore-container'>
                    <Row>
                        <Col className='col-md-6 text-start'>
                            <h1 className='explore-heading'>Explore investment opportunities with <br/><span className='fw-bold'>MXB</span> </h1>
                            <button className='contact-btn'>Contact Us</button>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default Explore_investment