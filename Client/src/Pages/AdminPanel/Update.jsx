import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Layout from '../../Commponent/Layout/Layout';

const Update = () => {

    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [quntity, setquntity] = useState("");
    const [category, setcategory] = useState("");
    const [subcategory, setsubcategory] = useState("");
    const [company, setcompany] = useState("");
    const [id, setId] = useState(0);

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setname(localStorage.getItem("name"));
        setprice(localStorage.getItem("price"));
        setquntity(localStorage.getItem("quntity"));
        setcategory(localStorage.getItem("category"));
        setsubcategory(localStorage.getItem("subcategory"));
        setcompany(localStorage.getItem("company"));
    }, [])

    const handleform = async (e) => {
        e.preventDefault();
        if (!name || !price || !category || !company || !subcategory) {
            alert("Please Fill The All Filed...!");
        } else {
            await axios.put(`http://localhost:2030/E-Commerce/api/product/${id}`, {
                name: name,
                price: price,
                quntity: quntity,
                category: category,
                subcategory: subcategory,
                company: company
            },
                {
                    headers: { authorization: JSON.parse(localStorage.getItem('token')) }
                }).then((res) => {
                    if (res.data) {
                        alert("Add Product Successfully...");
                        setname(""); setprice(""); setcategory(""); setsubcategory(""); setcompany(""); setquntity("");
                    }
                }).catch((err) => {
                    console.log(`Error From Add Product Page ${err}`);
                });
        };
    };

    return (
        <>
            <Layout>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-md-5 offset-md-4 my-5 border border-2 border-dark rounded">
                            <form onSubmit={handleform}>
                                <h1 className='text-center'>UpDate Product</h1>
                                <label className='fw-bold ms-2 text-info'>Product Name :-</label>
                                <input type="text" value={name} onChange={(e) => setname(e.target.value)}
                                    className='form-control mb-3 fw-bold shadow border-3' />
                                <label className='fw-bold ms-2 text-info'>Product Price :-</label>
                                <input type="text" value={price} onChange={(e) => setprice(e.target.value)}
                                    className='form-control mb-3 fw-bold shadow border-3' />
                                <label className='fw-bold ms-2 text-info'>Product Category :-</label>
                                <input type="text" value={category} onChange={(e) => setcategory(e.target.value)}
                                    className='form-control mb-3 fw-bold shadow border-3' />
                                <label className='fw-bold ms-2 text-info'>Product Sub-Category :-</label>
                                <input type="text" value={subcategory} onChange={(e) => setsubcategory(e.target.value)}
                                    className='form-control mb-3 fw-bold shadow border-3' />
                                <label className='fw-bold ms-2 text-info'>Product Company :-</label>
                                <input type="text" value={company} onChange={(e) => setcompany(e.target.value)}
                                    className='form-control mb-3 fw-bold shadow border-3' />
                                <label className='fw-bold ms-2 text-info'>Product Quntity :-</label>
                                <input type="text" value={quntity} onChange={(e) => setquntity(e.target.value)}
                                    className='form-control mb-3 fw-bold shadow border-3' />
                                <button className="btn btn-secondary border offset-sm-5 mb-3" type='submit'>
                                    UpDate</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Update;
