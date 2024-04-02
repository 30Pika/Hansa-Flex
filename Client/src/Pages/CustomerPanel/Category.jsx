import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import bag from "../../img/bag.jpg";

const Category = () => {

    const [data, setdata] = useState([]);
    const navigate = useNavigate();

    function getData() {
        axios.get("http://localhost:2030/E-Commerce/api/buyproduct"
        ).then((res) => {
            setdata(res.data.data);
        }).catch((err) => {
            console.log(`Error From Product List Page ${err}`);
        })
    }
    useEffect(() => {
        getData();
    }, [])

    const categorys = data.map(obj => obj.category);
    const newCategorys = [...new Set(categorys)];

    const GoToSubCategory = (cate) => {
        localStorage.setItem("loopcategory", cate);
        navigate("/SubCategory");
    }

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center'>OUR CATEGORIES</h1>
                        <div className="d-flex mt-3 flex-wrap justify-content-center shadow">
                            {
                                newCategorys.map((itm, index) => {
                                    return (
                                        <>
                                            <div class="card my-5 m-3 shadow" style={{ width: "14rem" }}
                                                onClick={() => GoToSubCategory(itm)}>
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
        </>
    )
}

export default Category
