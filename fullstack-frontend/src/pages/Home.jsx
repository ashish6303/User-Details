import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Home() {
    const [users, setUsers] = useState([]);
    const {id} = useParams();

 
    const loadUser = async () => {
        try {
            const response = await axios.get("http://localhost:8080/allUser");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/user/${id}`);
            await loadUser(); // Reload users after successful deletion
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    useEffect(() => {
        loadUser();
    }, []);


    return (
        <div className="container">
            <div className="py-4">
                <table className="table text-center table-hover border shadow">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Name </th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr >
                                <th scope="row" key={index}>{user.id + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                <Link className="btn btn-primary mx-2" to={`/viewUser/${user.id}`}>View</Link>
                                <Link className="btn btn-outline-primary mx-2" to={`/editUser/${user.id}`}>Edit</Link>
                                <button className="btn btn-danger mx-2" onClick={() => deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
