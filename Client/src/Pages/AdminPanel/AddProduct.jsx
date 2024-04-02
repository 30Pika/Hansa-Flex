import React, { useState } from 'react'
import axios from 'axios';
import Layout from '../../Commponent/Layout/Layout';

const AddProduct = () => {

    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [category, setcategory] = useState("");
    const [subcategory, setsubcategory] = useState("");
    const [company, setcompany] = useState("");
    const [quntity, setquntity] = useState("");
    const [image, setimage] = useState("");

    const handleform = async (e) => {
        e.preventDefault();
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        if (!name || !price || !category || !company || !quntity) {
            alert("Please Fill The All Filed...!");
        } else {
            const formdata = new FormData();
            formdata.append('name', name);
            formdata.append('price', price);
            formdata.append('category', category);
            formdata.append('subcategory', subcategory);
            formdata.append('userId', userId);
            formdata.append('company', company);
            formdata.append('quntity', quntity);
            formdata.append('image', image);
            await axios.post("http://localhost:2030/E-Commerce/api/product",
                formdata
                , {
                    headers: { authorization: JSON.parse(localStorage.getItem('token')) }
                }).then((res) => {
                    if (res) {
                        alert("Add Product Successfully...");
                        setname(""); setprice(""); setcategory(""); setcompany(""); setsubcategory("");
                        setquntity(""); setimage("");
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
                        <div className="col-md-5 offset-md-4 my-2 border border-2 border-dark rounded">
                            <form onSubmit={handleform}>
                                <h1 className='text-center'>Add Product</h1>
                                <input type="text" placeholder='Product Name' onChange={(e) => setname(e.target.value)}
                                    value={name} className='form-control mb-3 fw-bold shadow border-3' />
                                <input type="text" placeholder='Product Price' onChange={(e) => setprice(e.target.value)}
                                    value={price} className='form-control mb-3 fw-bold shadow border-3' />
                                {/* <input type="text" placeholder='Product Category' onChange={(e) => setcategory(e.target.value)}
                                    value={category} className='form-control mb-3 fw-bold shadow border-3' /> */}
                                <label htmlFor="dropdownMenuButton1 " className='fw-bold'>
                                    Category List
                                </label>
                                <div class="dropdown">
                                    <button class="form-control mb-3 fw-bold shadow border-3 text-start dropdown-toggle"
                                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        {
                                            !category ?
                                                <>Ex :- Electronics</>
                                                :
                                                <>{category}</>
                                        }
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li className='ms-3' onClick={(e) => setcategory("Electronics")}>Electronics</li>
                                        <li className='ms-3' onClick={(e) => setcategory("Pharmacys")}>Pharmacys</li>
                                        <li className='ms-3' onClick={(e) => setcategory("Sports")}>Sports</li>
                                        <li className='ms-3' onClick={(e) => setcategory("Home Appliances")}>Home Appliances</li>
                                        <li className='ms-3' onClick={(e) => setcategory("Travels")}>Travels</li>
                                        <li className='ms-3' onClick={(e) => setcategory("Grocerys")}>Grocerys</li>
                                        <li className='ms-3' onClick={(e) => setcategory("Furniture")}>Furniture</li>
                                    </ul>
                                </div>
                                <input type="text" placeholder='Product Sub-Category' onChange={(e) => setsubcategory(e.target.value)}
                                    value={subcategory} className='form-control mb-3 fw-bold shadow border-3' />
                                <input type="text" placeholder='Product Company' onChange={(e) => setcompany(e.target.value)}
                                    value={company} className='form-control mb-3 fw-bold shadow border-3' />
                                <input type="text" placeholder='Product Quntity' onChange={(e) => setquntity(e.target.value)}
                                    value={quntity} className='form-control mb-3 fw-bold shadow border-3' />
                                <input type="file" accept=".jpg, .jpeg, .png"
                                    onChange={(e) => setimage(e.target.files[0])} id="imagefile"
                                    className='form-control mb-3 fw-bold shadow border-3' />
                                <button className="btn btn-secondary border offset-sm-5 mb-3" type='submit'>
                                    Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default AddProduct;
