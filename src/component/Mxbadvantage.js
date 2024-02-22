import React from 'react'
import './mxbadvantage.css'
import { Row, Container, Col } from 'react-bootstrap';
import img1 from '../images/mxbadv1.webp'
import img2 from '../images/mxbadv2.webp'
import img3 from '../images/mxbadvimg4.webp'
const Mxbadvantage = () => {
    const data = [
        {
            "id": 1,
            "image": img1,
            "imgheading": "Unparalleled learning",
            "imgcontent": "We pay special emphasis on cultivating an environment that promotes synergy, collaboration and innovation. You will work closely with the leadership and get an opportunity to be a part of industry-shaping conversations and initiatives.",
        },
        {
            "id": 2,
            "image": img2,
            "imgheading": "Sustainable impact creation",
            "imgcontent": "We strive to create a positive impact through our commitment to integrity, accountability, respect, and ethical investing. Our objective is to leverage our expertize, resources and influence to create a long-lasting impact",
        },
        {
            "id": 3,
            "image": img3,
            "imgheading": "Balance and inclusivity-driven work culture", 
            "imgcontent": "Individual well-being is central to MXB's culture. We value diverse perspectives, celebrate unique strengths and encourage building synergies"
        }
    ]
    return (
        <>
            <section className='mxbadvantage-section pb-5'>
                <div>
                    <h4 className='mxbadv-heading pt-5'>The MXB Advantage</h4>

                    <Row className='mt-5 pt-3'>

                        <Col className='col-md-8 mx-auto'>
                            <Container>
                                <Row>
                                    {
                                        data.map((d) => {
                                            return (
                                                <>
                                                    <Col className='col-md-4'>

                                                        <div className=''>
                                                            <div className='inner-div text-center'>
                                                                <img src={d.image} alt=''/>
                                                                <h4 className='img-heading mt-4'>{d.imgheading}</h4>
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

                    </Row>

                </div>
            </section >
        </>
    )
}

export default Mxbadvantage