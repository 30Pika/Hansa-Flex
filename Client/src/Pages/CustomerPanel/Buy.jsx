import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import bag from "../../img/bag.jpg";
import Layout from '../../Commponent/Layout/Layout';

const ProductList = () => {

    const [data, setdata] = useState([]);
    const [Empty, setEmpty] = useState("");

    function getData() {
        axios.get("http://localhost:2030/E-Commerce/api/buyproduct"
            // {
            //     headers: { authorization: JSON.parse(localStorage.getItem('token')) }
            // }
        ).then((res) => {
            setdata(res.data.data);
        }).catch((err) => {
            console.log(`Error From Buy Product List Page ${err}`);
        })
    }
    useEffect(() => {
        getData();
    }, [])

    const Search = async (event) => {
        const key = event.target.value;
        setEmpty(key);
        await axios.get(`http://localhost:2030/E-Commerce/api/product/search/${key}`
            // {
            //     headers: { authorization: JSON.parse(localStorage.getItem('token')) }
            // }
        ).then((res) => {
            if (res.data.data) {
                setdata(res.data.data);
            }
        }).catch((err) => {
            console.log(`Error From Search Block Product List Page ${err}`);
        })
    }

    const Reset = () => {
        getData();
        setEmpty("");
    }

    const ConfirmBuy = (_id, name, company, category, subcategory, price, quntity, status, image) => {
        const buydata = { _id, name, company, category, subcategory, price, quntity, status, image };
        localStorage.setItem("buydata", JSON.stringify(buydata));
    }

    return (
        <>
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className='text-center'>Products</h1>
                            <div className="d-flex flex-row mb-3">
                                <input type="text" placeholder='Search' onChange={Search} value={Empty}
                                    className='p-1 w-25 border-3 text-info fs-5 fw-bold me-1' />
                                <i class='bx bx-x fs-2 p-1 fw-bold border border-dark border-3'
                                    onClick={Reset}></i>
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
                                                                        <h6>SubCategroy : {itm.subcategory}</h6>
                                                                    </div>
                                                                    {
                                                                        itm.quntity == 0 ?
                                                                            <>
                                                                                <div className="justify-content-between">
                                                                                    <div className='fs-5'><i className='bx bx-rupee '></i>{itm.price} /-</div>
                                                                                    <h5 className='text-danger'>Out_Of_Stock</h5>
                                                                                </div>
                                                                            </>
                                                                            :
                                                                            <>
                                                                                <div className="d-flex justify-content-between">
                                                                                    <div className='fs-5'><i className='bx bx-rupee '></i>{itm.price} /-</div>
                                                                                    <Link to="/ConfirmBuy"><button type="submit" className='btn btn-primary '
                                                                                        onClick={() => ConfirmBuy(itm._id, itm.name, itm.company, itm.category,
                                                                                            itm.subcategory, itm.price, itm.quntity, itm.status, itm.image)}>
                                                                                        Buy</button></Link>
                                                                                </div>
                                                                            </>
                                                                    }
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </>
                                        :
                                        <>
                                            <h1>No data : Please Enter New Data First As Admin...</h1>
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

export default ProductList;
