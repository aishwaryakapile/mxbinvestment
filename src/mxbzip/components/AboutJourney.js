import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './aboutjourney.css'
import img1 from '../images/journeyimg.webp'
const AboutJourney = () => {
    return (
        <>
            <section className='aboutjourney-section'>

                {/* <Container > */}
                    <Row >
                        <Col className='col-md-12 left-div'>
                           
                                <Row className='g-0'>
                                    <Col className='col-md-6 padding-left'>
                                        <div className='text-div'>
                                        <h2 className='aboutjourney-heading'>Our Journey<br /><span className='aboutjourney-sub-heading'>So Far</span></h2>
                                        
                                        <p className='aboutjourney-para'>As a family business, MXB Investment, has a long history that began in the early years of modern Saudi Arabia. Two brothers, late Sheikh Saad AlMousa and late Sheikh Abdulaziz AlMousa, were visionary leaders and businessmen who recognized the potential of Saudi Arabia's real estate market.  Later, late Sheikh Mousa AlMousa (s/o late Sheikh Saad AlMousa) expanded the family business by establishing MXB in 1984 and successfully leading the company in the development of real estate in the Kingdom.<br/><br/>

                                            Carrying the family legacy forward, Mr. Mishal AlMousa (s/o late Sheikh Mousa AlMousa) currently holds the office as the Managing Director in MXB.<br/><br/>

                                            The philosophy of MXB is influenced by the late Sheikh Mohammed Ibrahim Alsubeaei, founder of MASIC, who is the father-in-law of late Sheikh Mousa AlMousa. A modest man with great dignity, compassion and kindness, he devoted his life to serving Islam, his nation and his community. He played a pivotal role in the development of modern Saudi Arabia.<br/><br/>

                                            The most recent generation of the House of AlMousa currently runs the family business. They are dedicated to continuing the work of their forefathers and expanding on their achievements, with an emphasis on sustainability and innovation. Being at the forefront of major real estate projects in the Kingdom, MXB embraces change and growth while remaining rooted in its values and traditions as it looks to the future.

                                        </p>
                                        </div>
                                        
                                    </Col>
                                    <Col className='col-md-6 img-div'>
                                        <img src={img1} alt='' />
                                    </Col>
                                </Row>
                          
                        </Col>
                    </Row>

                {/* </Container> */}

            </section>
        </>
    )
}

export default AboutJourney