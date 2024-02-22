import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your Name"),
  nationality: Yup.string().min(4).required("Please enter Nationality"),
  jobrole: Yup.string().min(4).required("Please enter Job Role"),
  company: Yup.string().min(2).max(50).required("Please enter your Company"),
  title: Yup.string().min(2).max(25).required("Please enter Title"),
  //country: Yup.string().required("Please select your Country"),
  email: Yup.string().email().min(2).required("Please enter your Email"),
  phone: Yup.string().min(10).max(10).required("Please enter your Phone Number"),
  message: Yup.string().min(4).required("Please enter Message"),
  //agree: Yup.bool().oneOf([true], 'You must accept the terms and conditions')
  
  
});