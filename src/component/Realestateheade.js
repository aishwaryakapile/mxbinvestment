import React from 'react'
import { Row, Container } from 'react-bootstrap';
import './realestateheader.css'

const Realestateheade = () => {
    return (
        <>
            <section>
                <Container fluid className='realestateheader-section'>
                    <Row>
                        <h1 className='realestate-heading'>Creating Real Estate <br /><span className='fw-bold'>Legacy</span></h1>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Realestateheade