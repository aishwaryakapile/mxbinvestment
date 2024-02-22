import  {React,useState} from 'react'
import logo from '../images/mxb_logo.webp'
import { Container, NavDropdown } from 'react-bootstrap'
import './menu.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';

const Menu = () => {
    let expand = 'md';
    let homeurl = "/";
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const languages = [
        { code: 'en', name: 'English' },
        { code: 'ar', name: 'العربية' },
        // { code: 'es', name: 'Spanish' },
        // More languages
    ];
    const handleChangeLanguage = (event) => {
        setSelectedLanguage(event.target.value);
    };
    return (
        <>
            {/* <Container fluid> */}


            {/* <Navbar expand="lg" className="bg-navbar">
                        <Container>
                            <Navbar.Brand href="#home">
                                <img src={logo} alt='' className='logo' />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                  
                                        <Nav.Link href="#">About Us</Nav.Link>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Another action
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">
                                            Our Portfolio
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="#pricing">Career</Nav.Link>
                                        <Nav.Link href="#features">Contact Us</Nav.Link>

                                

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar> */}

            <div className='menu'>
                <Container fluid className='hero pt-3'>
                    <Navbar key={expand} bg="transparent" expand={expand} className="navbar-dark mb-3">
                        <Navbar.Brand href={homeurl}><img src={logo} alt="Logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>

                                <Nav className="justify-content-end flex-grow-1 pe-4">
                                    <NavLink className="nav-link pe-3" to="/about">About Us</NavLink>

                                    <NavDropdown title="Our Portfolio" id="basic-nav-dropdown" className='pe-3'>
                                        <NavDropdown.Item className='dropdown1'><NavLink to='/realestate'>Real Estate</NavLink></NavDropdown.Item>
                                        {/* <NavDropdown.Divider /> */}
                                        <NavDropdown.Item className='dropdown2'><NavLink to='/investment'> Investment</NavLink></NavDropdown.Item>
                                    </NavDropdown>
                                    {/* <NavLink className="nav-link" to="/solution">Who We Serve</NavLink>
                            <NavLink className="nav-link" to="/knowledge">Knowledge</NavLink> */}
                                    <NavLink className="nav-link pe-3" to="/career">Careers</NavLink>
                                    <NavLink className="nav-link pe-3" to="/contact">Contact Us</NavLink>
                                    <select value={selectedLanguage} onChange={handleChangeLanguage}>
                                        {languages.map((language) => (
                                            <option key={language.code} value={language.code}>
                                               {language.name}
                                            </option>
                                        ))}
                                    </select>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Navbar>
                </Container>
            </div>
            {/* </Container> */}

            {/* <Container>
                <Row>
                    <Col className='col-md-4'>
                        <img src={logo} alt=''/>
                    </Col>
                    <Col className='col-md-8'></Col>
                </Row>
            </Container> */}
        </>
    )
}

export default Menu