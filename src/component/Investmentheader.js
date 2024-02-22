import React from 'react'
import './investmentheader.css'
import { Row, Container, Col } from 'react-bootstrap';

const Investmentheader = () => {
    return (
        <>
            <section>
                <Container fluid className='investmentheader-section'>
                    <Row>
                        <h1 className='investment-heading'>Investing for sustainable <br /><span className='fw-bold'>financial growth</span></h1>
                    </Row>
                </Container>
                
            </section>
        </>
    )
}

export default Investmentheader