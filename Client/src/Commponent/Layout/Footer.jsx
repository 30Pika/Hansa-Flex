import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='bg-dark text-light p-1'>
        <h6 className='text-center mt-3'>All Right Reserved &copy; Pik@_30</h6>
        <p className='text-center'>
          {/* <Link to="/About" className='footer-li'>About</Link>|
          <Link to="/Contact" className='footer-li'>Contact</Link>|
          <Link to="/Policy" className='footer-li'>Privacy Policy</Link> */}
          <label className='footer-li fs-3'><i class='bx bxl-linkedin'></i></label>
          <label className='footer-li fs-3'><i class='bx bxl-youtube' ></i></label>
          <label className='footer-li fs-3'><i class='bx bxl-instagram' ></i></label>
          <label className='footer-li fs-3'><i class='bx bxl-twitter' ></i></label>
        </p>
      </div>
    </>
  )
}

export default Footer
