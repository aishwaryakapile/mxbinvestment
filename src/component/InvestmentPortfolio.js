import React from 'react'
import './investmentportfolio.css'
import { Container, Row, Col } from 'react-bootstrap'
import rsimg from '../images/rs-about.webp'
import img1 from '../images/ipimg1.webp'
import img2 from '../images/ip2.webp'
import img3 from '../images/ip3.webp'
import img4 from '../images/ip4.webp'
import img5 from '../images/ip5.webp'
import img6 from '../images/ip6.webp'
import img7 from '../images/ip7.webp'
import img8 from '../images/ip8.webp'
import img9 from '../images/ip9.webp'


const InvestmentPortfolio = () => {
  return (
    <>
      <section>
        <Container fluid className='investment-section'>
          <Row>
            <div className='text-box text-center'>
              {/* <div className='topright'><img src={topright} alt='' /></div>
                        <div className='bottomleft'><img src={bottomleft} alt='' /></div> */}
              <Container>
                <Row>
                  <Col className='col-md-5'>
                    <img src={rsimg} alt='' />
                  </Col>
                  <Col className='col-md-6 px-0 mx-auto'>
                    <h2>Building Wealth, Investing Wisely</h2>
                    <p className='mt-5'>At MXB, we are guided by an investment philosophy that revolves around driving capital appreciation through Shariah-compliant investments and maintaining a carefully balanced risk profile. We adopt a long-term perspective and aim to generate returns that surpass the market average. Through rigorous analysis, strategic decision making and active portfolio management we navigate the dynamic market landscape to deliver value to all our stakeholders</p>
                  </Col>
                </Row>
              </Container>
            </div>
          </Row>
        </Container>
      </section>
      {/* <Container fluid className='investmentbotm-section'>
        <Row>
          <Col className='col-md-8 mx-auto'>
            <Container>
              <Row>
                <Col className='col-md-4'></Col>
                <Col className='col-md-8 pt-5 mt-4 mb-4 pb-5'>
                  <h3 className='investbtm-heading'>Building Wealth, Investing Wisely</h3>
                  <p className='investbtm-para'>At MXB, we are guided by an investment philosophy that revolves around driving capital appreciation through Shariah-compliant investments and maintaining a carefully balanced risk profile. We adopt a long-term perspective and aim to generate returns that surpass the market average. Through rigorous analysis, strategic decision making and active portfolio management we navigate the dynamic market landscape to deliver value to all our stakeholders</p>
                </Col>
              </Row>
            </Container>

          </Col>
        </Row>
      </Container> */}

      <section className='investment-portfolio-section'>
        <Container>
          <Row>
            <div className='text-box text-center mt-5'>
              <Container>
                <Row className='header mt-5 pt-5'>
                  <h2>Our Investment Portfolio</h2>
                  <p>Committed to building purposeful infrastructure</p>
                </Row>
                <Row className='justify-content-center g-0 mt-4'>

                  <Col className='col-md-5 mx-2 img-box'>

                    <Row className='text-center g-2 '>
                      <h2 className='directequity'>Direct equity</h2>
                      <Col className='col-md-4 pt-3'>
                        <h3>Medical</h3>
                        <div className='potn-reltv'>
                          <img src={img1} alt='' />
                          <h4 className='overlay-text'>Aid Medical</h4>
                        </div>
                      </Col>
                      <Col className='col-md-4 pt-3'>
                        <h3>Logistics</h3>
                        <div className='potn-reltv'>
                          <img src={img2} alt='' />
                          <h4 className='overlay-text overlay-text2'>MASIC Logistics</h4>

                        </div>
                      </Col>
                      <Col className='col-md-4 pt-3'>
                        <h3>Operations</h3>
                        <div className='mb-1 potn-reltv'>
                          <img src={img3} alt='' />
                          <h4 className='overlay-text overlay-text3'>TATRA Global</h4>

                        </div>
                        <div className='pt-1 potn-reltv'>
                          <img src={img4} alt='' />
                          <h4 className='overlay-text overlay-text4'>MEEM Facility Management</h4>

                        </div>
                      </Col>
                    </Row>
                  </Col>

                  <Col className='col-md-5 mx-1  img-box'>

                    <Row className='text-center g-2'>
                      <h2>Private equity funds</h2>
                      <div className='mt-5 potn-reltv'>
                        <img src={img5} alt='' />
                        <h4 className='overlay-text'>Jadwa Healthcare Opportunities Fund</h4>

                      </div>

                    </Row>
                  </Col>
                </Row>
                <Row className='justify-content-center g-0 mt-0'>
                  <Col className='col-md-5 mx-2  img-box'>
                    <Row className='text-center g-2'>
                      <h2>Discretionary portfolio management</h2>
                      <div className='mt-5 potn-reltv'>
                        <img src={img6} alt='' />
                        <h4 className='overlay-text'>Jadwa Multi Asset DPM</h4>

                      </div>
                    </Row>
                  </Col>
                  <Col className='col-md-5 mx-1 img-box'>

                    <Row className='text-center g-2'>
                      <h2>Indirect real estate</h2>
                      <Col className='col-md-4 mt-5'>
                        {/* <h2>Medical</h2> */}
                        <div className='potn-reltv'>
                          <img src={img7} alt='' />
                          <h4 className='overlay-text'>Prime</h4>

                        </div>
                      </Col>
                      <Col className='col-md-4 mt-5'>
                        {/* <h2>Logistics</h2> */}
                        <div className='potn-reltv'>
                          <img src={img8} alt='' />
                          <h4 className='overlay-text'>Safa Najd</h4>

                        </div>
                      </Col>
                      <Col className='col-md-4 mt-5'>
                        {/* <h2>Operations</h2> */}
                       
                        <div className='potn-reltv'>
                          <img src={img9} alt='' />
                          <h4 className='overlay-text'>Albilad Obhur</h4>

                        </div>
                      </Col>
                    </Row>
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

export default InvestmentPortfolio