import React from 'react'
import Layout from '../Commponent/Layout/Layout'
import Category from './CustomerPanel/Category'
import oneimg from "../img/ecommerce.jpg"
import secondimg from "../img/shopping-apps.jpg"
import thirdimg from "../img/2018122106110810962.jpg"
import About from './About';
import Contact from "./Contact";

const Home = () => {

  return (
    <>
      <Layout >
        <div id="carouselExampleCaptions" className="carousel slide border border-2 border-dark" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={thirdimg} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={secondimg} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={oneimg} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <Category />
        <div className='mb-5'></div>
        <About />
        <Contact />
      </Layout>
    </>
  )
}

export default Home
