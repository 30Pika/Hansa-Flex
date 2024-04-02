import React from 'react'
import Layout from '../Commponent/Layout/Layout'
import img from '../img/contact.jpg'
const Contact = () => {
  return (
    <>
      {/* <Layout> */}
      <div className="row g-0 contactus shadow">
        <div className="col-md-5">
          <img src={img} className='rounded shadow'></img>
        </div>
        <div className="col-md-4 offset-md-1">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about product feel free to call anytime we 24X7
            vaialible;
          </p>
          <p className="mt-3 fs-4">
            <i class='bx bx-link-alt me-2 fs-4 fw-bold'></i>: www.help@ecommerceapp.com
          </p>
          <p className="mt-3 fs-4">
            <i class='bx bx-phone-call me-2 fs-4 fw-bold' ></i>: 012-3456789
          </p>
          <p className="mt-3 fs-4">
            <i class='bx bx-headphone me-2 fs-4 fw-bold' ></i>: 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
      {/* </Layout> */}
    </>
  )
}

export default Contact
