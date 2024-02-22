import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './ourvaluesystem.css'
import lefttop from '../images/lefttop-ov.webp'
import rightbottom from '../images/rightbottom-ov.webp'

const Ourvaluesystem = (props) => {
    const data = props.data;
    return (
        <>
            <section className='value-section'>
              <div className='lefttop'><img src={lefttop} alt='' /></div>
              <div className='rightbottom'><img src={rightbottom} alt='' /></div>
                <div>
                    <h4 className='value-heading'>{props.heading}</h4>
                    <p className='value-para'>These principles form the bedrock of our operations, pushing us to strive for excellence,<br/> embrace continuous improvement, and deliver exceptional results sustainably.</p>

                    <Row className='mt-5 pt-3'>
                        {/* <Col className='col-md-2'></Col> */}
                        <Col className='col-md-10 mx-auto'>
                            <Container>
                                <Row>
                                    {
                                        data.map((d) => {
                                            return (
                                                <>
                                                    <Col className='col-md-4'>

                                                        <div className='text-center bg-box'>
                                                            <div className='inner-div'>
                                                                <div className='img-div'>
                                                                <img src={d.image} alt='' />
                                                                </div>
                                                                <h4 className='img-heading mt-4' dangerouslySetInnerHTML={{ __html: d.imgheading }}></h4>
                                                                <p className='img-para'>{d.imgcontent}</p>
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
                        {/* <Col className='col-md-2'></Col> */}
                    </Row>

                </div>
            </section >
        </>
    )
}

export default Ourvaluesystem