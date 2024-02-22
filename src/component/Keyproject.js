import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './keyproject.css'

import porject1 from '../images/project1.webp'
import porject2 from '../images/project2.webp'
import porject3 from '../images/project3.webp'
import porject4 from '../images/project4.webp'

import topright from '../images/kp-top-right.webp'
import bottomleft from '../images/kp-bottom-left.webp'


const Keyproject = () => {

    const data = [
        { id: 1, img: porject1, heading: "Olaya District Building", para: 'Located on Musa Ibn Nusair Street and connected to King Fahd road, this property consists of a mix of 58 residential, and 31 commercial units, with the facility of underground parking. It has a net leasable area of 8478 sqm and is well connected to almost the entire city. It is currently leased out'  },
        { id: 2, img: porject2, heading: "Plumeria building", para: 'Located in the Al Yasmin district in northern Riyadh and spread across 5,640 sqm land area, the property is a three-sided open retail-cum office complex on AL Thumamah Road, available on a lease. The offices and retail stores are directly let-out to the tenants'  },
        { id: 3, img: porject3, heading: "Aqeeq Building", para: 'With a net leasable area of 1593 sqm, and multiple hospitality and eatery establishments in the vicinity, this 3-star hotel property is currently leased out as a single unit to the tenant'  }
    ];


  return (
    <section className='keyproject-section'>
        <div className='topright'><img src={topright} alt='' /></div>
        <div className='bottomleft'><img src={bottomleft} alt='' /></div>
                  
    <Container>
        <Row>
            <div className='text-box text-center'>
                <Container>
                    <Row className='header'>
                        <h2>Key Projects</h2>
                        <p>Developed properties</p>
                    </Row>
                    <Row className='justify-content-center my-5'>

                    {data.map((d, i) => (
                    <Col className='col-md-4'>
                       <div className='img-box'>
                        <div className=''>
                                <img src={d.img} alt='' />
                            </div>
                            <div>
                                <h2>{d.heading}</h2>
                                <p>{d.para}</p>
                            </div>
                       </div>
                    </Col>
                    
                    ))}

                        <Col className='col-md-4 mt-4 undev-left'>
                            <h2>Under-development<br/> properties</h2>
                        </Col>
                        
                        <Col className='col-md-8 mt-4 undev-right'>
                            <Row className=''>
                                <Col className='col-md-6 p-0'>
                                    <img src={porject4} alt='' />
                                </Col>
                                <Col className='col-md-6 p-5 mx-auto'>
                                    <h2>Axis plaza</h2>
                                    <p className='mt-2'>A demolished and re-developed multi-use retail and office property, located on Olaya Street, directly opposite King Abdullah Financial District, this property is spread over an area of 8,525 sqm and is well connected with King Fahd Road, Al Thumama Road, and the upcoming metro lines</p>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </div>
        </Row>
    </Container>
    </section>
  )
}

export default Keyproject
