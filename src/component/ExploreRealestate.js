import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './explorerealestate.css'
import img1 from '../images/explorerealimg.webp'

const ExploreRealestate = () => {
  return (
    <>
            <section className='explore-realestate-section'>
                <Container>
                    <Row>
                        <Col className=''>
                            <img src={img1} alt='' className='explore-real-image' />
                        </Col>
                    </Row>

                </Container>
                <Container className='explore-real-container'>
                    <Row>
                        <Col className='col-md-6 text-start'>
                            <h1 className='explore-real-heading'>Explore Real Estate opportunities with<br/><span className='fw-bold'>MXB</span> </h1>
                            <button className='contact-btn'>Contact Us</button>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
  )
}

export default ExploreRealestate