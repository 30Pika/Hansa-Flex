import React, { useEffect, useState } from 'react'
import bag from "../../img/bag.jpg";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from '../../Commponent/Layout/Layout';


const Cart = () => {

  const auth = JSON.parse(localStorage.getItem("user"));
  const id = auth._id;
  const [data, setData] = useState([]);

  const BuyData = async () => {
    await axios.get(`http://localhost:2030/E-Commerce/api/buyproduct/cart/${id}`, {
      headers: { authorization: JSON.parse(localStorage.getItem('token')) }
    }).then((res) => {
      if (res.data) {
        setData(res.data.result);
      }
    }).catch((err) => {
      console.log(`Error From Cart Page : ${err}`);
    })
  }

  useEffect(() => {
    BuyData();
  }, []);

  return (
    <>
      <Layout>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className='d-flex justify-content-center position-relative '>
                <div className='position-absolute top-0 start-0 fs-3 fw-bold'>
                  <Link to="/" className='text-decoration-none text-dark'>
                    <i class='bx bx-left-arrow-alt'>Back</i>
                  </Link>
                </div>
                <h1 className='text-center'>Buy Product List</h1>
              </div>
              <div className="d-flex flex-wrap justify-content-center shadow">
                {
                  data ?
                    <>
                      {
                        data.map((itm) => {
                          return (
                            <>
                              <div class="card m-3 shadow" style={{ width: "14rem" }}>
                                {
                                  itm.image ?
                                    <img src={`http://localhost:2030/Images/` + itm.image.filename}
                                      class="card-img-top img-thumbnail" style={{ height: "35vh" }} alt="..." />
                                    :
                                    <img src={bag} class="card-img-top img-thumbnail" style={{ height: "35vh" }} alt="..." />
                                }
                                <div class="card-body">
                                  <h5 class="card-title ">Name : {itm.name}</h5>
                                  <div>
                                    <h6>Company : {itm.company}</h6>
                                    <h6>Categroy : {itm.category}</h6>
                                    <h6>Buying Qut : {itm.quntity}</h6>
                                    <h6>Status : {itm.status}</h6>
                                    <div className="d-flex justify-content-around">
                                      <div className='fs-5'><i className='bx bx-rupee '></i>{itm.price} /-</div>
                                    </div>
                                  </div>
                                  <h5>Total Bill : {itm.bill}</h5>
                                </div>
                              </div>
                            </>
                          )
                        })
                      }
                    </>
                    :
                    <>
                      <h1>No Buying Product Data Available</h1>
                    </>
                }
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Cart;
