import React, { useState } from 'react'
import Layout from '../../Commponent/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleform = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Please Enter The All Filed...!");
        } else {
            await axios.post("http://localhost:2030/E-Commerce/api/login", {
                email: email,
                password: password
            }).then((res) => {
                if (res.data.user) {
                    localStorage.setItem("user", JSON.stringify(res.data.user));
                    localStorage.setItem("token", JSON.stringify(res.data.token));
                    const msg = JSON.stringify(res.data.status);
                    alert(`User Login Successfully... Status : ${msg}`);
                    navigate("/Buy");
                } else {
                    localStorage.setItem("user", JSON.stringify(res.data.admin));
                    localStorage.setItem("token", JSON.stringify(res.data.token));
                    navigate("/AddProduct");
                }
            }).catch((err) => {
                console.log(`Error From Login Page ${err}`)
            })
        }
    }

    return (
        <>
            <Layout>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6 mt-2 offset-md-3 ">
                            <form onSubmit={handleform}>
                                <div className='d-flex justify-content-center '>
                                    <p className='fs-2 fw-bold text-dec-underline'>Sign In</p>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                                    <input type="email" className="form-control border-3 border-info shadow" id="exampleInputEmail1"
                                        value={email} onChange={(e) => { setemail(e.target.value) }}
                                        aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="inputPassword5" class="form-label fw-bold">Password</label>
                                    <input type="password" id="inputPassword5" class="form-control border-3 border-info shadow"
                                        value={password} onChange={(e) => { setpassword(e.target.value) }}
                                        aria-describedby="passwordHelpBlock" />
                                </div>
                                <div className="d-flex mt-3">
                                    <button type="submit" class="btn btn-secondary shadow border-1 border-dark d-inline">Submit</button>
                                    <p className='ms-5 align-bottom '>Create New Account? </p>
                                    <Link to="/Register" className='fs-5 fw-bold ms-2'>Sign Up...</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Login
