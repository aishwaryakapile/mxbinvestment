import React from 'react'
import './career.css'
import { Row, Col, Container } from 'react-bootstrap';
import img1 from '../images/Homepage-CareerOppurtunities.webp'

const Career = () => {
    return (
        <>
            <section className='career-section'>
                <Container>
                    <Row>
                        <Col className='mt-5 pt-4'>
                            <img src={img1} alt='' className='career-image' />
                        </Col>
                    </Row>
                   
                </Container>
                <Container className='img-text'>
                <Row>
                        <Col className='col-md-6'>
                            <h2 className='img-text-heading'>Career Opportunities</h2>
                            <p className='img-text-para'>Be a part of purpose-driven ethical<br/> wealth creation</p>
                            <button className='img-text-button'>Explore Now</button>
                        </Col>
                    </Row>
                </Container>

            </section>

        </>
    )
}

export default Career