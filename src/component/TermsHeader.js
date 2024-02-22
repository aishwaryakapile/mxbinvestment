import React from 'react'
import { Row, Container } from 'react-bootstrap';
import './termsheader.css'

const TermsHeader = () => {
  return (
    <section>
    <Container fluid className='termsheader-section'>
        <Row>
            <h1 className='realestate-heading'>Terms and conditions</h1>
        </Row>
    </Container>
</section>

  )
}

export default TermsHeader
