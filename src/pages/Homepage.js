import React from 'react'
import Homeheader from '../component/Homeheader'
import Mxbinvestment from '../component/Mxbinvestment';
//import Valuesystem from '../component/Valuesystem';
import Ourvaluesystem from '../component/Ourvaluesystem';
import img1 from '../images/valueimg1.webp'
import img2 from '../images/valueimg2.webp'
import img3 from '../images/valueimg3.webp'
import Estate from '../component/Estate';
import Career from '../component/Career';

const Homepage = () => {
  const heading = "Our value system"
  const valuedata = [
    {
      "id": 1,
      "image": img1,
      "imgheading": "Be a trusted & <br /> active investor",
      "imgcontent": "We actively monitor and manage our investments, seize market opportunities and adapt to the evolving market dynamics to deliver optimal results while also maintaining an open and transparent communication with all our stakeholders.",
    },
    {
      "id": 2,
      "image": img2,
      "imgheading": "Drive sustainable <br /> wealth creation",
      "imgcontent": "We believe in prioritizing investments that not only create sustainable returns but are also aligned with global environmental, societal and governance practices.",
    },
    {
      "id": 3,
      "image": img3,
      "imgheading": "Follow a high-conviction approach to investment",
      "imgcontent": "We are able to consistently create long-lasting value in a dynamic and complex business environment by adopting a research and analysis driven investment approach.",
    }
  ]
  return (
    <>
      <Homeheader />
      <Mxbinvestment />
      <Ourvaluesystem data={valuedata} heading={heading} />
      <Estate />
      <Career />
    </>
  )
}

export default Homepage