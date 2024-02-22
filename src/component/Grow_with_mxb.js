import React from 'react'
import './grow_with_mxb.css'
import { Row, Container, Col, NavLink } from 'react-bootstrap';
const Grow_with_mxb = () => {
    const data = [
        {
            "id": 1,
            "heading": "RE Development Director",
            "content": "Work closely with the Investment & Finance Director to manage MXB’s under-development projects",
            "button": "Learn More"
        },
        {
            "id": 2,
            "heading": "Investment & Finance Director",
            "content": "Work closely with the CEO to lead the full cycle of the investment process, including deal origination, structuring and execution",
            "button": "Learn More"
        },
        {
            "id": 3,
            "heading": "Operations Coordinator",
            "content": "Support the operations manager with the daily operations of the department, including leasing and collections",
            "button": "Learn More"
        }
    ]
    return (
        <>
            <section className='growmxb-section pb-5'>
                <div>
                    <h4 className='growmxb-heading'>Grow with MXB</h4>
                    <h5 className='growmxb-sub-heading'>Open positions</h5>
                    <Row className='mt-5 pt-3'>

                        <Col className='col-md-10 mx-auto'>
                            <Container>
                                <Row>
                                    {
                                        data.map((d) => {
                                            return (
                                                <>
                                                    <Col className='col-md-4'>

                                                        <div className='bggrey'>
                                                            <div className='inner-div'>
                                                                <h4 className='img-heading mt-4'>{d.heading}</h4>
                                                                <p className='img-para'>{d.content}</p>
                                                                <NavLink>{d.button}</NavLink>
                                                            </div>
                                                        </div>

                                                    </Col>
                                                </>
                                            )
                                        })
                                    }
                                </Row >
                            </Container>
                        </Col>

                    </Row>

                </div>
            </section >
        </>
    )
}

export default Grow_with_mxb