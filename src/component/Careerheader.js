import React from 'react'
import './careerheader.css'
import { Row, Container,Col } from 'react-bootstrap';


const Careerheader = () => {
    return (
        <>
            <section>
                <Container fluid className='careerheader-section'>
                    <Row>
                        <h1 className='career-heading'>Career at MXB<br /><span className='fw-bold'>Pursue excellence</span></h1>
                    </Row>
                </Container>
                <Container fluid className='careerbotheader-section'>
                    <Row>
                        <Col className='col-md-6 mx-auto pt-5 pb-5 mt-5 mb-2 positn-relative'>
                            <h2 className='career-btm-heading'>At MXB</h2>
                            <p className='career-btm-para'>we are shaping the future of ethical and sustainable wealth creation by relentlessly focusing on innovation and excellence, while also upholding the highest standards of integrity. We believe in creating an environment where our team can thrive and create meaningful impact.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Careerheader