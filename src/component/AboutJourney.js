import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './aboutjourney.css'
import img1 from '../images/journeyimg.webp'
import img2 from '../images/Corporate-governance.webp'
import img3 from '../images/Successionchess.webp'
const AboutJourney = () => {
    return (
        <>
            <section className='aboutjourney-section'>

                {/* <Container > */}
                <Row >
                    <Col className='col-md-12 left-div'>
                        {/* firstrow */}
                        <Row className='g-0'>
                            <Col className='col-md-6 padding-left'>
                                <div className='text-div'>
                                    <h2 className='aboutjourney-heading'>Journey<br /><span className='aboutjourney-sub-heading'>So Far</span></h2>

                                    <p className='aboutjourney-para'>As a family business, MXB Investment, has a long history that began in the early years of modern Saudi Arabia. Two brothers, late Sheikh Saad AlMousa and late Sheikh Abdulaziz AlMousa, were visionary leaders and businessmen who recognized the potential of Saudi Arabia's real estate market.  Later, late Sheikh Mousa AlMousa (s/o late Sheikh Saad AlMousa) expanded the family business by establishing MXB in 1984 and successfully leading the company in the development of real estate in the Kingdom.<br /><br />

                                        Carrying the family legacy forward, Mr. Mishal AlMousa (s/o late Sheikh Mousa AlMousa) currently holds the office as the Managing Director in MXB.<br /><br />

                                        The philosophy of MXB is influenced by the late Sheikh Mohammed Ibrahim Alsubeaei, founder of MASIC, who is the father-in-law of late Sheikh Mousa AlMousa. A modest man with great dignity, compassion and kindness, he devoted his life to serving Islam, his nation and his community. He played a pivotal role in the development of modern Saudi Arabia.<br /><br />

                                        The most recent generation of the House of AlMousa currently runs the family business. They are dedicated to continuing the work of their forefathers and expanding on their achievements, with an emphasis on sustainability and innovation. Being at the forefront of major real estate projects in the Kingdom, MXB embraces change and growth while remaining rooted in its values and traditions as it looks to the future.

                                    </p>
                                </div>

                            </Col>
                            <Col className='col-md-6 img-div'>
                                <img src={img1} alt='' />
                            </Col>
                        </Row>
                        {/* second row */}
                        <Row className='g-0'>
                            <Col className='col-md-6 padding-left'>
                                <div className='text-div'>
                                    <h2 className='aboutjourney-heading'>Corporate<br /><span className='aboutjourney-sub-heading'>Governance</span></h2>

                                    <p className='aboutjourney-para'>We lead the way in corporate governance based on the principles of fairness, transparency, accountability, and responsibility as a family-owned business. Corporate governance is a key differentiator for us and a pillar in establishing our reputation as a competent, ethical, and responsive investment company. Corporate governance is an essential aspect of our business strategy, and we are committed to upholding the highest standards in this area. By doing so, we believe that we can continue to build trust and credibility with our stakeholders and achieve long-term success as a family-owned investment company. The committees included in our governance structure are:
                                    </p>
                                    <ul className='text-start Governance-list pb-5'>
                                        <li>Executive Committee</li>
                                            <li>Nomination and Remuneration Committee</li>
                                            <li>Audit & Risk Committee</li>
                                    </ul>
                                </div>

                            </Col>
                            <Col className='col-md-6 img-div'>
                                <img src={img2} alt='' />
                            </Col>
                        </Row>
                        {/* third row */}
                        <Row className='g-0'>
                            <Col className='col-md-6 padding-left'>
                                <div className='text-div'>
                                    <h2 className='aboutjourney-heading'>Succession<br /><span className='aboutjourney-sub-heading'>Plan</span></h2>

                                    <p className='aboutjourney-para third-para'>MXB's leadership recognizes the importance of developing successors to ensure a smooth transition and uninterrupted operations. Through this strategic approach, MXB is able to maintain a high level of competence within the organization, ultimately leading to a successful and thriving business. By investing in succession planning, MXB can nurture and advance the careers of its employees. This not only benefits the individuals themselves but also contributes to the overall success and sustainability of the business.
                                    </p>
                                    {/* <ul className='text-start Governance-list pb-5'>
                                        <li>Executive Committee</li>
                                            <li>Nomination and Remuneration Committee</li>
                                            <li>Audit & Risk Committee</li>
                                    </ul> */}
                                </div>

                            </Col>
                            <Col className='col-md-6 img-div'>
                                <img src={img3} alt='' />
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