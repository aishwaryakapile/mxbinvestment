import React from 'react'
import { Row, Container } from 'react-bootstrap';
import './ppolicyheader.css'


const Ppolicyheader = () => {
  return (
    <section>
        <Container fluid className='ppolicy-section'>
            <Row>
                <h1 className='ppolicy-heading'>Privacy policy</h1>
            </Row>
        </Container>
    </section>

  )
}

export default Ppolicyheader
