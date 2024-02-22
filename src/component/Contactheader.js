import React from 'react'
import './contactheader.css'
import { Row, Container, Col } from 'react-bootstrap';
const Contactheader = () => {
    return (
        <>
            <section>
                <Container fluid className='contactheader-section'>
                    <Row className='contact-inner-div'>
                        <h1 className='career-heading'>Get in touch <span className='fw-bold'>with us</span></h1>


                        <Col className='col-md-8 mx-auto'>
                            <p className='career-paragraph'>If you're interested in exploring partnerships or investment opportunities, please fill out this form and we'll be in touch to discuss potential synergies and collaborations.</p>
                        </Col>


                       
                    </Row>
                    {/* <button className='learnmore-btn'>Learn More</button> */}
                </Container>
            </section>
        </>
    )
}

export default Contactheader