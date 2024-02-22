import React from 'react'
import { Row, Container } from 'react-bootstrap';
import './homeheader.css'
// Col,
const Homeheader = () => {
  return (
    <>
<section className='homeheader-section'>
    <Container>
        <Row>
            <h1 className='header-heading'>Building wealth responsibly <br/><span className='fw-bold'>investing with integrity</span></h1>
        </Row>
    </Container>
</section>
    </>
  )
}

export default Homeheader