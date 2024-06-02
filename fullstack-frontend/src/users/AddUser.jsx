import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

function AddUser() {

    // const [name, setName] = useState('');
    // const [userName, setUserName] = useState('');
    // const [email, setEmail] = useState('');

    // This is a object
    const [user, setUser] = useState({
        name:"",
        username:"",
        email: ""
    })

    let navigate = useNavigate();
// Here we are oing to destruct the object
    const {name, username, email} = user;


    // const handelNameChange = (e) => {
    //     setName(e.target.value);
    //     console.log(name);

    // }

    // const handelUserNameChange = (e) => {
    //     setUserName(e.target.value);
    // }
    // console.log(userName)

    // const handelEmailChange = (e) => {
    //     setEmail(e.target.value);
    //     console.log(email)

    // }

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const onSubmit =async (e) => {
        console.log(user,"user");
        e.preventDefault();
        await axios.post("http://localhost:8080/createUser",user);
        navigate('/');
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register User</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your name"
                                name="name"
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Username" className="form-label">
                                Username
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your username"
                                name="username"
                                value={username}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                E-mail
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your e-mail address"
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddUser