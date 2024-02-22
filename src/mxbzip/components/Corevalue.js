import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './corevalue.css'
import img1 from '../images/valueimg1.webp'
import img2 from '../images/valueimg2.webp'
import img3 from '../images/valueimg3.webp'
import img4 from '../images/corevalueimg4.webp'
const Corevalue = () => {
    const data = [
        {
          "id": 1,
          "image": img1,
          "imgheading": "Integrity",
          "imgcontent": "Our business is built on the pillars of honesty and transparency. These values are at the core of everything we do, and we believe they are essential to our success.",
        },
        {
          "id": 2,
          "image": img2,
          "imgheading": "Accountability",
          "imgcontent": "We take complete ownership of our actions, decisions and outcomes in all aspects of our operations, ensuring that we consistently exceed expectations",
        },
        {
          "id": 3,
          "image": img3,
          "imgheading": "Respect",
          "imgcontent": "We value everyone and treat people with dignity and professionalism.",
        },
        {
          "id": 4,
          "image": img4,
          "imgheading": "Ethical investing",
          "imgcontent": "We are committed to integrating financial goals with responsible and sustainable practices that deliver long term value to our clients and society at large",
        }
      ]
  return (
    <>
<section className='corevalue-section mt-5 pt-5 mb-5 pb-5'>
              {/* <div className='lefttop'><img src={lefttop} alt='' /></div>
              <div className='rightbottom'><img src={rightbottom} alt='' /></div> */}
                <div>
                    <h4 className='corevalue-heading'>Our Core Values</h4>
                    <p className='corevalue-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                    <Row className='mt-5 pt-3 mb-5'>
                        {/* <Col className='col-md-2'></Col> */}
                        <Col className='col-md-10 mx-auto'>
                            <Container>
                                <Row>
                                    {
                                        data.map((d) => {
                                            return (
                                                <>
                                                    <Col className='col-md-3'>

                                                        <div className='text-center bg-box'>
                                                            <div className='inner-div'>
                                                                <div className='img-div'>
                                                                <img src={d.image} alt='' />
                                                                </div>
                                                                <h4 className='img-heading mt-5 pt-5'>{d.imgheading}</h4>
                                                                <p className='img-para mt-3 pt-4'>{d.imgcontent}</p>
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

export default Corevalue