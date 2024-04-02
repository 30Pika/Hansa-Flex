import React from 'react'
import Layout from '../Commponent/Layout/Layout'
import img from "../img/Policy.jpg"

const Policy = () => {
  return (
    <>
      <Layout>
        <div className="row contactus g-0">
          <div className="col-md-5">
            <img src={img} style={{ height: "50vh" }} className='rounded shadow About'></img>
          </div>
          <div className="col-md-4 offset-md-2">
            <p>add privacy policy</p>
            <p>add privacy policy</p>
            <p>add privacy policy</p>
            <p>add privacy policy</p>
            <p>add privacy policy</p>
            <p>add privacy policy</p>
            <p>add privacy policy</p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Policy
