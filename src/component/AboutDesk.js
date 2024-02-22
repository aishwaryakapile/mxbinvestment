import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './aboutdesk.css'

const AboutDesk = () => {
    return (
        <>
            <section className='aboutdesk-section'>

                <Container>
                    <Row>
                        <div className='img-text text-center'>
                            {/* <div className='topright'><img src={topright} alt='' /></div>
                                <div className='bottomleft'><img src={bottomleft} alt='' /></div> */}
                            <Container>
                                <Row>
                                    <Col className='col-md-9'>
                                        <h2 className='img-heading'>From the <br /> Chairman’s desk</h2>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='col-md-1'></Col>
                                    <Col className='col-md-11'>
                                        <p className='img-para'>The foundation of the company was laid in 1984 on its core values - integrity, professionalism, and dedication. These values have remained at the heart of the company's operations and have contributed to its success over the years.<br /><br />
                                            Acknowledging the opportunities presented by the dynamic and future-oriented Kingdom of Saudi Arabia’s Vision 2030 and the Kingdom's fast-paced advancement, we rebranded in 2021 as MXB Investment Company with the aim of contributing our part to realizing this vision in the Kingdom and across all asset classes where we invest.<br /><br />
                                            MXB is a Shariah-compliant investment firm, and we adhere to our principles and traditional family values. Our goal is to create long-term value for our shareholders by making sustainable investments in diverse asset classes while adhering to Islamic principles.<br /><br />

                                            As a next generation enterprise, we also encourage leadership in our business and prioritize diversity and inclusion in our team. We believe that our success is not only measured by financial gains but also by the positive impact we make on the communities we operate in. At MXB, we are committed to creating a better future for all stakeholders and contributing to the growth and development of our people, communities, and nation.<br /><br />

                                           <span className='sub-para'>Mrs. Nada Mohammed Alsubeaei<br />
                                            Chairman, MXB Investment Company</span> 
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

export default AboutDesk