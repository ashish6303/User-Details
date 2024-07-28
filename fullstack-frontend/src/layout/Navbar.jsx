import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLightTheme, setDarkTheme } from '../features/themeSlice';

function Navbar() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);

    const toggleTheme = () => {
        // themeContext.setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
        if (theme === 'light') {
            dispatch(setDarkTheme());
        } else {
            dispatch(setLightTheme());
        }
    };

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
                    <Link className="btn btn-outline-light" to="/addUser" style={{ float: "right" }}>Add User</Link>
                    <div className="text-end mb-3">
                        <button className="btn btn-sm btn-secondary" onClick={toggleTheme}>
                            Toggle Theme
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
