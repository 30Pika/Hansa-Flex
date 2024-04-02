import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import bag from "../../img/bag.jpg";
import Layout from '../../Commponent/Layout/Layout';

const Category = () => {

    const [data, setdata] = useState([]);
    const navigate = useNavigate();
    const key = localStorage.getItem("loopsubcategory");

    function getData() {
        axios.get(`http://localhost:2030/E-Commerce/api/buyproduct/subcategory/${key}`
        ).then((res) => {
            setdata(res.data.data);
        }).catch((err) => {
            console.log(`Error From Product List Page ${err}`);
        })
    }
    useEffect(() => {
        getData();
    }, [])

    const company = data.map(obj => obj.company);
    const newcompany = [...new Set(company)];

    const GoToCompany = (com) => {
        localStorage.setItem("loopcompany", com);
        navigate("/product");
    }

    return (
        <>
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className='d-flex justify-content-center position-relative '>
                            <div className='position-absolute top-0 start-0 fs-3 fw-bold'>
                                <Link to="/SubCategory" className='text-decoration-none text-dark'>
                                    <i class='bx bx-left-arrow-alt'>Back</i>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex mt-5 flex-wrap justify-content-center shadow">
                                {
                                    newcompany.map((itm) => {
                                        return (
                                            <>
                                                <div class="card m-3 shadow" style={{ width: "14rem" }}
                                                    onClick={() => GoToCompany(itm)}>
                                                    <img src={bag} class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <div>
                                                            <h3> {itm}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Category
