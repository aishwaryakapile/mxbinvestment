import React from 'react'
import './contactbody.css'
import { Container, Row, Col } from 'react-bootstrap'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { TextareaAutosize } from '@mui/material';
import { useFormik, Form } from 'formik';
import { signUpSchema } from "./Signupschema";

const initialValues = {
    name: "",
    company: "",
    title: "",
    // country: "",
    email: "",
    phone: "",
    message: "",

}
const Contactbody = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: signUpSchema,
            onSubmit: (values, action) => {
                console.log(

                    values
                );
                action.resetForm();
            },
        });
    console.log(

        errors
    );
    return (
        <>
            <section className='contactbody-section'>
                <Container fluid>
                    <Row className='pt-5'>
                        <Col className='col-md-6 form-container'>
                            {/* <Container> */}
                            <Row>
                                <Col className='col-md-4'></Col>
                                <Col className='col-md-8'>
                                    <p className='contactform-para'>Thank you for your interest in MXB<br /> Investment. For inquiries, please fill<br /> out the form below.</p>
                                    <p className='contactform-heading'>Leave us a message</p>
                                    <form onSubmit={handleSubmit}>
                                        <Box component="form"
                                            sx={{
                                                '& .MuiTextField-root': {  width: '100%' },
                                            }} className='padding-right'>
                                            <div className='mt-4'>
                                                <TextField id="" label="Name" variant="outlined" value={values.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                                <div className='errormsg'> {errors.name && touched.name ? (
                                                    <p className="form-error">{errors.name}</p>
                                                ) : null}</div>
                                            </div>
                                            <div className='mt-4'>
                                                <TextField id="" label="Company Name" variant="outlined" value={values.company}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                                <div className='errormsg'> {errors.company && touched.company ? (
                                                    <p className="form-error">{errors.company}</p>
                                                ) : null}</div>
                                            </div>
                                            <div className='mt-4'>
                                                <TextField id="" label="Title" variant="outlined" value={values.title}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                                <div className='errormsg'> {errors.title && touched.title ? (
                                                    <p className="form-error">{errors.title}</p>
                                                ) : null}</div>
                                            </div>
                                            <div className='mt-4'>
                                                <TextField id="" type='email' label="Email Address" variant="outlined" value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                                <div className='errormsg'> {errors.email && touched.email ? (
                                                    <p className="form-error">{errors.email}</p>
                                                ) : null}</div>
                                            </div>
                                            <div className='mt-4'>
                                                <TextField id="" label="Mobile" variant="outlined" value={values.phone}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                                <div className='errormsg'> {errors.phone && touched.phone ? (
                                                    <p className="form-error">{errors.phone}</p>
                                                ) : null}</div>
                                            </div>
                                            <div className='mt-4'>
                                                <TextareaAutosize id="" label="Your Message" variant="outlined" className='w-100 msgfield' placeholder='Your Message' minRows={3} value={values.message}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                                <div className='errormsg'> {errors.message && touched.message ? (
                                                    <p className="form-error">{errors.message}</p>
                                                ) : null}</div>
                                            </div>
                                        </Box>

                                        <div className='mt-5 me-4'>
                                            <button className='submit-btn'>Submit</button>
                                        </div>
                                    </form>
                                </Col>
                            </Row>
                            {/* </Container> */}
                        </Col>
                        <Col className='col-md-6 address-div text-start'>
                            <div>
                                <p><svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 4.25C6.45833 4.25 5.57292 4.61458 4.84375 5.34375C4.11458 6.07292 3.75 6.95833 3.75 8C3.75 9.04167 4.11458 9.92708 4.84375 10.6562C5.57292 11.3854 6.45833 11.75 7.5 11.75C8.54167 11.75 9.42708 11.3854 10.1562 10.6562C10.8854 9.92708 11.25 9.04167 11.25 8C11.25 6.95833 10.8854 6.07292 10.1562 5.34375C9.42708 4.61458 8.54167 4.25 7.5 4.25ZM7.5 10.5C6.82292 10.5 6.23698 10.2526 5.74219 9.75781C5.2474 9.26302 5 8.67708 5 8C5 7.32292 5.2474 6.73698 5.74219 6.24219C6.23698 5.7474 6.82292 5.5 7.5 5.5C8.17708 5.5 8.76302 5.7474 9.25781 6.24219C9.7526 6.73698 10 7.32292 10 8C10 8.67708 9.7526 9.26302 9.25781 9.75781C8.76302 10.2526 8.17708 10.5 7.5 10.5ZM7.5 0.5C6.14583 0.5 4.89583 0.838542 3.75 1.51562C2.60417 2.19271 1.69271 3.10417 1.01562 4.25C0.338542 5.39583 0 6.64583 0 8C0 8.83333 0.104167 9.57552 0.3125 10.2266C0.520833 10.8516 0.924479 11.6328 1.52344 12.5703C1.9401 13.2214 2.79948 14.4844 4.10156 16.3594L6.71875 20.1094C6.90104 20.3698 7.16146 20.5 7.5 20.5C7.83854 20.5 8.09896 20.3698 8.28125 20.1094L10.8984 16.3594C12.2005 14.4844 13.0599 13.2214 13.4766 12.5703C14.0755 11.6328 14.4792 10.8516 14.6875 10.2266C14.8958 9.57552 15 8.83333 15 8C15 6.64583 14.6615 5.39583 13.9844 4.25C13.3073 3.10417 12.3958 2.19271 11.25 1.51562C10.1042 0.838542 8.85417 0.5 7.5 0.5ZM7.5 19.0156C6.875 18.1042 6.06771 16.9453 5.07812 15.5391C3.82812 13.7422 3.00781 12.5573 2.61719 11.9844C2.07031 11.099 1.70573 10.3958 1.52344 9.875C1.34115 9.32812 1.25 8.70312 1.25 8C1.25 7.16667 1.40625 6.3724 1.71875 5.61719C2.03125 4.86198 2.48698 4.1849 3.08594 3.58594C3.6849 2.98698 4.36198 2.53125 5.11719 2.21875C5.8724 1.90625 6.66667 1.75 7.5 1.75C8.33333 1.75 9.1276 1.90625 9.88281 2.21875C10.638 2.53125 11.3151 2.98698 11.9141 3.58594C12.513 4.1849 12.9688 4.86198 13.2812 5.61719C13.5938 6.3724 13.75 7.16667 13.75 8C13.75 8.70312 13.6589 9.32812 13.4766 9.875C13.2943 10.3958 12.9297 11.099 12.3828 11.9844C11.9922 12.5573 11.1719 13.7422 9.92188 15.5391L7.5 19.0156Z" fill="white" />
                                </svg>
                                    <span className='address-paragraph'>Al Takhassousi street, Olaya District, Riyadh</span><br /><span className='address-paragraph leftpadding1'> 12333 Kingdom of Saudi Arabia</span></p>
                                <p><svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 4.25C6.45833 4.25 5.57292 4.61458 4.84375 5.34375C4.11458 6.07292 3.75 6.95833 3.75 8C3.75 9.04167 4.11458 9.92708 4.84375 10.6562C5.57292 11.3854 6.45833 11.75 7.5 11.75C8.54167 11.75 9.42708 11.3854 10.1562 10.6562C10.8854 9.92708 11.25 9.04167 11.25 8C11.25 6.95833 10.8854 6.07292 10.1562 5.34375C9.42708 4.61458 8.54167 4.25 7.5 4.25ZM7.5 10.5C6.82292 10.5 6.23698 10.2526 5.74219 9.75781C5.2474 9.26302 5 8.67708 5 8C5 7.32292 5.2474 6.73698 5.74219 6.24219C6.23698 5.7474 6.82292 5.5 7.5 5.5C8.17708 5.5 8.76302 5.7474 9.25781 6.24219C9.7526 6.73698 10 7.32292 10 8C10 8.67708 9.7526 9.26302 9.25781 9.75781C8.76302 10.2526 8.17708 10.5 7.5 10.5ZM7.5 0.5C6.14583 0.5 4.89583 0.838542 3.75 1.51562C2.60417 2.19271 1.69271 3.10417 1.01562 4.25C0.338542 5.39583 0 6.64583 0 8C0 8.83333 0.104167 9.57552 0.3125 10.2266C0.520833 10.8516 0.924479 11.6328 1.52344 12.5703C1.9401 13.2214 2.79948 14.4844 4.10156 16.3594L6.71875 20.1094C6.90104 20.3698 7.16146 20.5 7.5 20.5C7.83854 20.5 8.09896 20.3698 8.28125 20.1094L10.8984 16.3594C12.2005 14.4844 13.0599 13.2214 13.4766 12.5703C14.0755 11.6328 14.4792 10.8516 14.6875 10.2266C14.8958 9.57552 15 8.83333 15 8C15 6.64583 14.6615 5.39583 13.9844 4.25C13.3073 3.10417 12.3958 2.19271 11.25 1.51562C10.1042 0.838542 8.85417 0.5 7.5 0.5ZM7.5 19.0156C6.875 18.1042 6.06771 16.9453 5.07812 15.5391C3.82812 13.7422 3.00781 12.5573 2.61719 11.9844C2.07031 11.099 1.70573 10.3958 1.52344 9.875C1.34115 9.32812 1.25 8.70312 1.25 8C1.25 7.16667 1.40625 6.3724 1.71875 5.61719C2.03125 4.86198 2.48698 4.1849 3.08594 3.58594C3.6849 2.98698 4.36198 2.53125 5.11719 2.21875C5.8724 1.90625 6.66667 1.75 7.5 1.75C8.33333 1.75 9.1276 1.90625 9.88281 2.21875C10.638 2.53125 11.3151 2.98698 11.9141 3.58594C12.513 4.1849 12.9688 4.86198 13.2812 5.61719C13.5938 6.3724 13.75 7.16667 13.75 8C13.75 8.70312 13.6589 9.32812 13.4766 9.875C13.2943 10.3958 12.9297 11.099 12.3828 11.9844C11.9922 12.5573 11.1719 13.7422 9.92188 15.5391L7.5 19.0156Z" fill="white" />
                                </svg>
                                    <span className='address-paragraph'>https://goo.gl/mapswFx13yZu1pN5eEBJ9</span></p>
                                <p><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg><span className='address-paragraph2'> info@mxb.sa </span></p>
                                <p><span className='address-paragraph2 leftpadding'>UAN : 9200 19927</span></p>
                                <iframe title='Google Map' style={{ border: 0 }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14497.881150576583!2d46.6608874!3d24.7107298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1de1e36de813%3A0xdb3ff66e3043572a!2sMXB%20INVESTMENT%20COMPANY!5e0!3m2!1sen!2sin!4v1688988599259!5m2!1sen!2sin" width="400" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container >

            </section >
        </>
    )
}

export default Contactbody