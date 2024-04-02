import React from 'react'
// import Layout from '../Commponent/Layout/Layout'
import img from "../img/About.jpg";

const About = () => {
  return (
    <>
      {/* <Layout > */}
      <div className="row g-0 contactus bg-light">
        <div className="col-md-4 text-justify">
          <h3>Online-Bady</h3>
          <p className="text-justify mt-2">
            Welcome to Online-Bady – your destination for
            online product sales OTT platform.
            Since 2024, we're been on a mission to provide quality/unique products
            with a commitment to excellence, customer satisfaction.
          </p>
          <h4>Our Promise</h4>
          <p>Quality First: Discover handpicked all product curated for excellence.</p>
          <p>Customer-Centric: Our dedicated team ensures your satisfaction is our top priority.</p>
          <p>Sustainability: Join us in our eco-friendly initiatives for a greener tomorrow.</p>
          <h3>Why Choose Us?</h3>
          <p>We're more than just a store; we're a community. Every purchase supports our mission
            to Everyone Everywere. Thank you for choosing Onlie-Bady –
            let's make every shopping experience memorable!</p>
        </div>
        <div className="col-md-5 offset-md-1">
          <img src={img} style={{ height: "50vh" }} className='rounded shadow About'></img>
        </div>
      </div>
      {/* </Layout> */}
    </>
  )
}

export default About
