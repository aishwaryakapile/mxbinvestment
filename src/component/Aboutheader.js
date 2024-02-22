import React from 'react'
import './aboutheader.css'
import { Row, Container } from 'react-bootstrap';
const Aboutheader = () => {
    return (
        <>
            <section>
                <Container fluid className='aboutheader-section'>
                    <Row>
                        <h1 className='about-heading'>Discover the <span className='fw-bold'>MXB Story</span></h1>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Aboutheader