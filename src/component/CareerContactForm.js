import React from 'react'
import './careercontactform.css'
import { Row, Container, Col } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { TextareaAutosize } from '@mui/material';
import { useFormik } from 'formik';
import { signUpSchema } from "./Signupschema";

const initialValues = {
    name: "",
    jobrole: "",
    nationality: "",
    // country: "",
    email: "",
    phone: "",
    message: "",

}
const CareerContactForm = () => {
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
            <section className='career-contact-section pb-5'>
                <div>
                    <h4 className='career-contact-heading pt-5'>Apply for a role at MXB</h4>
                </div>
                <Container>
                    <Row>
                        <Col className='col-md-4 mx-auto'>
                            <form onSubmit={handleSubmit}>
                                <Box component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '100%' },
                                    }} className='padding-right'>
                                    <div>
                                        <TextField id="" label="Name" variant="outlined" value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        <div className='errormsg'> {errors.name && touched.name ? (
                                            <p className="form-error">{errors.name}</p>
                                        ) : null}</div>

                                    </div>
                                    <div>
                                        <TextField id="" label="Job Role" variant="outlined" value={values.jobrole}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        <div className='errormsg'> {errors.jobrole && touched.jobrole ? (
                                            <p className="form-error">{errors.jobrole}</p>
                                        ) : null}</div>
                                    </div>
                                    <div><TextField id="" label="Nationality" variant="outlined" value={values.nationality}
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                        <div className='errormsg'> {errors.nationality && touched.nationality ? (
                                            <p className="form-error">{errors.nationality}</p>
                                        ) : null}</div>
                                    </div>
                                    <div>
                                        <TextField id="" type='email' label="Email Address" variant="outlined" value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        <div className='errormsg'> {errors.email && touched.email ? (
                                            <p className="form-error">{errors.email}</p>
                                        ) : null}</div>
                                    </div>
                                    <div><TextField id="" label="Mobile" variant="outlined" value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                        <div className='errormsg'> {errors.phone && touched.phone ? (
                                            <p className="form-error">{errors.phone}</p>
                                        ) : null}</div>
                                    </div>
                                    <div><TextareaAutosize id="" label="Your Message" variant="outlined" className='w-100 form-control' placeholder='Your Message' minRows={3} value={values.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                        <div className='errormsg'> {errors.message && touched.message ? (
                                            <p className="form-error">{errors.message}</p>
                                        ) : null}</div>
                                    </div>
                                </Box>
                                <div className='mt-5 marginleft'>
                                    {/* <label> */}
                                    {/* <input type='file' />Upload */}
                                    <TextField id="" type='file'
                                    variant="outlined" className='w-100 fileinput' />
                                    {/* </label> */}
                                </div>
                                <div className='mt-5 marginleft'>
                                    <button className='submit-btn'>Apply</button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CareerContactForm