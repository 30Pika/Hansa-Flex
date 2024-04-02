import React, { useEffect, useState } from 'react'
import Layout from '../../Commponent/Layout/Layout'
import { Link } from 'react-router-dom'
import axios from 'axios';
const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleform = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            alert("Please Fill The All Fileds...!");
        } else {
            await axios.post("http://localhost:2030/E-Commerce/api/register", {
                name: name,
                email: email,
                password: password,

            }).then((res) => {
                if (res) {
                    alert("User Register Successfully...");
                    setName(""); setEmail(""); setPassword("");
                }
            }).catch((err) => {
                console.log(`Error From Register page ${err}`);
            })
        }
    }

    return (
        <>
            <Layout>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 ">
                            <form onSubmit={handleform}>
                                <div className='d-flex justify-content-center '>
                                    <p className='fs-3 fw-bold text-dec-underline'>Sign Up</p>
                                </div>
                                <div className="mb-1">
                                    <label for="exampleInputName" className="form-label fw-bold">User Name</label>
                                    <input type="name" className="form-control border-3 border-info shadow" id="exampleInputName"
                                        value={name} onChange={(e) => { setName(e.target.value) }}
                                        aria-describedby="nameHelp" />
                                </div>
                                <div className="mb-1">
                                    <label for="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                                    <input type="email" className="form-control border-3 border-info shadow" id="exampleInputEmail1"
                                        value={email} onChange={(e) => { setEmail(e.target.value) }}
                                        aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-1">
                                    <label for="inputPassword5" className="form-label fw-bold">Password</label>
                                    <input type="password" id="inputPassword5" className="form-control border-3 border-info shadow"
                                        value={password} onChange={(e) => { setPassword(e.target.value) }}
                                        aria-describedby="passwordHelpBlock" />
                                </div>
                                <div className="d-flex mt-1">
                                    <button type="submit" className="btn btn-secondary shadow border-1 border-dark d-inline">Submit</button>
                                    <p className='ms-5 align-bottom '>If Alerady Have Any Account? </p>
                                    <Link to="/Login" className='fs-5 fw-bold ms-2'>Sign In...</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Register;
