import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">

                    <a className="navbar-brand mx-2" href="#">
                        User Details Application
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        {/* <span className="navbar-toggler-icon"></span> */}
                    </button>
                    <Link className="btn btn-outline-light " to="/addUser" style={{ float: "right" }}>Add User</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
