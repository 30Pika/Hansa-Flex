import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../Commponent/Layout/Layout';

const ProductList = () => {

    const navigate = useNavigate();
    const [data, setdata] = useState([]);
    const [Empty, setEmpty] = useState("");

    function getData() {
        axios.get("http://localhost:2030/E-Commerce/api/buyproduct/status",
            {
                headers: { authorization: JSON.parse(localStorage.getItem('token')) }
            }).then((res) => {
                setdata(res.data.data);
            }).catch((err) => {
                console.log(`Error From All Order Product List Page ${err}`);
            })
    }
    useEffect(() => {
        getData();
    }, [])

    const changeStatus = async (status, id) => {
        await axios.put(`http://localhost:2030/E-Commerce/api/buyproduct/update_status/${id}`,
            {
                status: status
            }, {
            headers: { authorization: JSON.parse(localStorage.getItem('token')) }
        }).then((response) => {
            alert("Status updated successfully..!");
            getData();
        }).catch((err) => {
            console.log(`Error From All Order Product List Change Status : ${err}`);
        })
    }

    return (
        <>
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover mt-2 caption-top border-top border-dark">
                                <caption className='fw-bold text-center text-dark fs-2'>All Order Products List</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Sub-Category</th>
                                        <th scope="col">Compnay</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quntity</th>
                                        <th scope="col">Bill</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Update Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((itm, index) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{itm.name}</td>
                                                        <td>{itm.category}</td>
                                                        <td>{itm.subcategory}</td>
                                                        <td>{itm.company}</td>
                                                        <td>{itm.price}</td>
                                                        <td>{itm.quntity}</td>
                                                        <td>{itm.bill}</td>
                                                        <td>{itm.status}</td>
                                                        <td>
                                                            <div class="dropdown">
                                                                <button class="btn btn-light  dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    Status List
                                                                </button>
                                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li onClick={(e) => changeStatus("Pending", itm._id)}>Pending</li>
                                                                    <li onClick={(e) => changeStatus("Process", itm._id)}>process</li>
                                                                    <li onClick={(e) => changeStatus("Dispatched", itm._id)}>Dispatched</li>
                                                                    <li onClick={(e) => changeStatus("On Road", itm._id)}>On Road</li>
                                                                    <li onClick={(e) => changeStatus("Delivered", itm._id)}>Delivered</li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ProductList;
