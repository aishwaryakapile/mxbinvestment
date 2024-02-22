import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './aboutmanagingdirector.css'
const AboutManagingDirector = () => {
    return (
        <>
            <section className='aboutmanaging-section'>

                <Container>
                    <Row>
                        <div className='img-text text-center'>
                            {/* <div className='topright'><img src={topright} alt='' /></div>
                          <div className='bottomleft'><img src={bottomleft} alt='' /></div> */}
                            <Container>
                                <Row>
                                    <Col className='col-md-9'>
                                        <h2 className='img-heading'>Mr. Mishal AlMousa</h2>
                                        <h4 className='img-sub-heading'>Managing Director at MXB</h4>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='col-md-1'></Col>
                                    <Col className='col-md-11'>
                                        <p className='img-para'>Mr. Mishal AlMousa, the Managing Director of MXB Investment, brings a wealth of experience in the management of investments and real estate. He completed his Executive MBA from the London Business School, and currently serves as a Board Member in multiple organizations across a wide range of industries leveraging his keen insights and vast expertise in multiple industries.<br/><br/>

                                            Mr. Mishal began his career in corporate banking. He worked for SAB Bank and Albilad Bank. He has also managed to help grow the family business' investment portfolio by finding deals, analyzing investments, and making important decisions. With the help of his extensive network, he has been able to locate promising investment opportunities.<br/><br/>


                                            Carrying the legacy of his family, Mr. Mishal aims to be a leading force in significant real estate initiatives within the Kingdom, adeptly balancing his commitment to evolution and expansion with a steadfast adherence to core values and time-honored traditions, ensuring a progressive outlook towards the future.
                                        </p>

                                    </Col>

                                </Row>
                            </Container>
                        </div>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default AboutManagingDirector